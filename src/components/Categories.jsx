import React from 'react'
import CategoryCard from './CategoryCard'
import {BsVectorPen} from 'react-icons/bs'
import {TiHtml5} from 'react-icons/ti'
import {TbMicrophone2,TbMusic} from 'react-icons/tb'
import {HiOutlineBriefcase} from 'react-icons/hi'
import {WiSunrise} from 'react-icons/wi'
import {AiOutlineCamera} from 'react-icons/ai'
import {BiData} from 'react-icons/bi'
import {MdAttachMoney} from 'react-icons/md'
import {FaUniversity} from 'react-icons/fa'

const Categories = () => {
  return (
    <div className='w-full bg-[#F0FBF7] py-24'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                
                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 md:gap-4 gap-1'>
                <CategoryCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
                <CategoryCard icons={<MdAttachMoney size={30} />} title={'Bitcoin'} />
                <CategoryCard icons={<MdAttachMoney size={30} />} title={'Trading'} />

                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Photography'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Music'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Marketing'} />

                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Personal Develop'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Health & Fitness'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Finance'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Teaching'} />
                    <CategoryCard icons={<MdAttachMoney size={30} />} title={'Teaching'} />
                </div>
        </div>
    </div>
  )
}

export default Categories