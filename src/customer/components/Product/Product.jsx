import React from 'react'
import ProductCard from './ProductCard'
import { mens_kurta } from '../../Data/mens_kurta'
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import FilterListIcon from '@mui/icons-material/FilterList';
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/24/outline'
import { filters, SingleFilter,sortOptions } from './FilterData'
import { useLocation, useNavigate } from 'react-router-dom'



function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export default function Product() {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const handleFilter =(value,sectionId) => {
    const searchParams = new URLSearchParams(location.search)
    let filterValue = searchParams.getAll(sectionId)
    if(filterValue.length > 0 && filterValue[0].split(",").includes(value)){
      filterValue = filterValue[0].split(",").filter((item) => item !== value);

      if(filterValue.length ===0){
        searchParams.delete(sectionId)
      }
    }
    else{
      filterValue.push(value)
    }

    if(filterValue.length > 0){
      searchParams.set(sectionId,filterValue.join(","));
  
    }
    const query = searchParams.toString();
    navigate({search:`?${query}`})
  }

  const handleRadioFilterChange = (e,sectionId) => {
    const searchParams = new URLSearchParams(location.search)

    searchParams.set(sectionId,e.target.value)
    const query = searchParams.toString();
    navigate({search:`?${query}`})
  }


  return (

    <div className='bg-white'>
      <div>
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom='opacity-0'
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
            </Transition.Child>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto px-4 sm:px-6 lg:px-20">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray">
                    Sort
                    <ChevronDownIcon className='-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden="true" />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom='transform opacity-0 scale-95'
                  enterTo="transform opacity-100 scale-100"
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'>

                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className='py-1'>
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500" >
                <span className='sr-only'>View grid</span>
                <Squares2X2Icon className='h-5 w-5' aria-hidden="true" />
              </button>
              <button type="button"
                className='-m-2 ml-4 p-4 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden'
                onClick={() => setMobileFiltersOpen(true)}>
                <span className='sr-only'>Filters</span>
                <FunnelIcon className='h-5 w-5' aria-hidden="true" />
              </button>
            </div>
          </div>
          <section aria-labelledby='products-heading' className='pb-24 pt-6'>
            <h2 id='products-heading' className='sr-only'>Products</h2>
            <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-5'>
            
              {/* Filters */}
              <div>
                <div className=' py-10 flex justify-between item-center'><h1 className='text-lg opacity-50 font-bold'>Filters</h1>
                <FilterListIcon/></div>
              
              <form className='hidden lg:block'>
                {/* <h3 className='sr-only'>Categories</h3>
          <ul role="list" className='space-y-4 border-b border-gray-200 pb-6 text-sm font-medium'>
            {subCategories.map((category) => (
              <li key={category.name}>
                <a href={category.href}>{category.name}</a>
              </li>
            ))}
          </ul> */}

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className='-my-3 flow-root'>
                          <Disclosure.Button className="flex w-full items-center justify-between">
                            <span className='font-medium text-gray-900 py-3'>{section.name}</span>
                            <span className='ml-6 flex items-center'>
                              {open ? (
                                <MinusIcon className='h-5 w-5' aria-hidden="true" />

                              ) : (<PlusIcon className='h-5 w-5' aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className='space-y-4'>
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className='flex items-center'>
                                <input
                                onChange={() => handleFilter(option.value,section.id)}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className='h-4 w-4 rounded border-gray-300 text-indigo-600' />
                                <label htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className='ml-3 text-sm text-gray-600'>
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}

                  </Disclosure>
                ))}
                {SingleFilter.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className='-my-3 flow-root'>
                          <Disclosure.Button className="flex w-full items-center justify-between">
                            <span className='font-medium text-gray-900 py-3'>{section.name}</span>
                            <span className='ml-6 flex items-center'>
                              {open ? (
                                <MinusIcon className='h-5 w-5' aria-hidden="true" />

                              ) : (<PlusIcon className='h-5 w-5' aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className='space-y-4'>
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className='flex items-center'>
                                <input
                                onChange={(e) => handleRadioFilterChange(e,section.id)}
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="radio"
                                  defaultChecked={option.checked}
                                  className='h-4 w-4 rounded border-gray-300 text-indigo-600' />
                                <label htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className='ml-3 text-sm text-gray-600'>
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}

                  </Disclosure>
                ))}
              </form>
              </div>
          

              {/* Product Grid */}

              <div className='lg:col-span-4 w-full'>
                <div className='flex flex-wrap justify-center bg-white py-5'>
                  {mens_kurta.map((item) => <ProductCard product={item} />)}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )

}