import { Popover as PopoverHL, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Dispatch, Fragment, SetStateAction } from 'react';

export const Popover = ({
  open,
  setOpen,
  count,
  setOption
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  count: number;
  setOption: Dispatch<SetStateAction<number>>;
}) => {
  const handleClick = (option: number) => {
    if (option === 4) {
      setOpen(false);
    }

    setOption(option);
  };

  const options = [
    {
      name: 'Selected',
      iconPath: null,
      option: 1
    },
    {
      name: 'Rename',
      iconPath: 'edit',
      option: 2
    },
    {
      name: 'Delete',
      iconPath: 'remove',
      option: 3
    },
    {
      name: 'Cancel',
      iconPath: 'cancel-selection',
      option: 4
    }
  ];

  if (count > 1) options.splice(1, 1);
  if (count == 0) setOpen(false);

  return (
    <div className="-mt-60 mr-[548px]">
      <PopoverHL className="relative">
        {() => (
          <>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1">
              <PopoverHL.Panel className="absolute left-1/2 z-10 w-[180px] -translate-x-1/2 transform px-0">
                <div className="overflow-hidden rounded-[20px] ring-1 ring-black ring-opacity-5  shadow-2xl">
                  {/* <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2"> */}
                  <div className="grid grid-cols-1 divide-y font-montserrat">
                    {options.map((item, index) => (
                      <div
                        onClick={() => handleClick(item.option)}
                        key={item.name}
                        className={`${
                          index === 0 ? 'bg-[#F5F5F5]' : 'bg-white'
                        }  flex items-center transition duration-150 ease-in-out hover:bg-[#F5F5F5] cursor-pointer p-2`}>
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white ml-2.5 mr-1.5">
                          {item.iconPath ? (
                            <img src={`/icons/${item.iconPath}.svg`} alt="Computer icon" />
                          ) : (
                            <div className="flex justify-center bg-[#364152] rounded-full w-[20px] h-[20px]">
                              <h2 className="text-xs mt-0.5">
                                <span className=" text-center whitespace-nowrap align-baseline text-white font-semibold mr-0.5">
                                  {count}
                                </span>
                              </h2>
                            </div>
                          )}
                        </div>
                        <p
                          className={`${
                            index === 0
                              ? 'text-[#364152] font-bold'
                              : 'text-[#788AA6] font-semibold'
                          } text-xs`}>
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </PopoverHL.Panel>
            </Transition>
          </>
        )}
      </PopoverHL>
    </div>
  );
};
