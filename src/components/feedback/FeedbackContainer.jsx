import React from 'react'
import FeedbackCard from './FeedbackCard'
import Button from '../Button'

const FeedbackContainer = () => {
    const feedback=[
        {

        }
    ]
  return (
    <section>
        <h2 className='text-3xl font-bold text-center'>Some valuable feedback from our students</h2>
        <p className='my-2 text-center text-sm text-primary-text-normal dark:text-primary-text-normal-dark'>Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how.</p>
        <Button children='View Reviews' />
    <div className='grid  gap-5 md:grid-cols-2 lg:grid-cols-3 '>
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
    </div>
    </section>
  )
}

export default FeedbackContainer