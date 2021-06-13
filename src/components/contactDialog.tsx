import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import type { VFC } from "react";
import { Formik, FormikProps } from "formik";
import { ContactInfo } from "src/types"
import { axiosWriteInstance } from "src/lib/api";

export const ContactDialog: VFC = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  
  interface Error {
    urlRequired?: string;
  }
  const validate = (values: ContactInfo) => {
    const error: Error = {};
    if (!values.url) {
      error.urlRequired = "入力してください";
    }
    return error;
  }

  const handleSendForm = async (form: ContactInfo, { setSubmitting, setErrors, setStatus, resetForm }: any) => {
    try {
      const baseUrl = process.env.micro_cms_base_url;
      await axiosWriteInstance.post(`${baseUrl}/contact`, form);
      resetForm();
      setStatus({ success: true });
    } catch (error) {
      console.log(error.message);
      setStatus({ success: false });
    }
    setSubmitting(false);
  };

  return (
    <>
      <div className="">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded inline-flex items-center focus:outline-none font-normal text-sm" onClick={openModal}>
          <span>掲載する</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto max-w-dialog mx-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-opacity-50 bg-black" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  掲載を依頼
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    URLとメッセージを入力して送信してください。<br />
                    1〜3日以内に掲載いたします。
                  </p>
                </div>

                <div className="mt-4">
                  <Formik onSubmit={handleSendForm} initialValues={{ url: "", message: "" }} validate={validate}>
                  {(props: FormikProps<ContactInfo>) => {
                    const { handleSubmit, values, errors, handleChange } = props;
                    return (
                      <form className="px-4 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2" >
                            掲載したいURL
                          </label>
                          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="url" type="text" value={values.url} onChange={handleChange} />
                          <p className="text-xs text-red-400 mt-1">{(errors as Error).urlRequired}</p>
                        </div>
                        <div className="mb-6">
                          <label className="block text-gray-700 text-sm font-bold mb-2" >
                            メッセージなど (任意)
                          </label>
                          <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="message" rows={5} value={values.message} onChange={handleChange}> </textarea>
                        </div>
                        <div className="flex items-center justify-between">
                          <button
                            type="submit"
                            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                          >
                            送信
                          </button>
                        </div>
                      </form>
                    )}}
                  </Formik>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
