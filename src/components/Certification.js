import React from 'react'

const Certification = () => {
  return (
    <section name="certifications" className="bg-gray-100 dark:bg-black">
      <div className="container flex flex-col dark:bg-black ">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-black-100 dark:text-white font-bold md:text-7xl text-4xl pt-5">Certifica<span className="border-b-4 border-gray-600 dark:border-white">tion</span></h1>
        </div>
        <div className="flex flex-wrap text-left justify-center items-center gap-2 py-10">
          <div className="bg-white border-gray-200 border rounded-md p-5 w-[300px]">
            <h3 className="font-medium text-xl">Java</h3>
            <h4 className="text-gray-500">SoloLearn.com</h4>
            <p className="font-medium">→ <a className="hover:underline" href="https://www.sololearn.com/certificates/course/en/26118735/1068/landscape/png" target="_blank">View Certificate</a></p>
          </div>
          <div className="bg-white border-gray-200 border rounded-md p-5 w-[300px]">
            <h3 className="font-medium text-xl">JavaScript</h3>
            <h4 className="text-gray-500">SoloLearn.com</h4>
            <p className="font-medium">→ <a className="hover:underline" href="https://www.sololearn.com/certificates/course/en/26178691/1024/landscape/png" target="_blank">View Certificate</a></p>
          </div>
          <div className="bg-white border-gray-200 border rounded-md p-5 w-[300px]">
            <h3 className="font-medium text-xl">TypingTest</h3>
            <h4 className="text-gray-500">Typing.com</h4>
            <p className="font-medium">→ <a className="hover:underline" href="https://www.typing.com/apiv1/student/units/3/121728831/certificate?language=en&product_id=typing" target="_blank">View Certificate</a></p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification