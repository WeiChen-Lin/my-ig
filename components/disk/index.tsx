import Search from 'components/disk/search'
import Sort from 'components/disk/sort'
import Files from 'components/disk/files'
import Operator from 'components/disk/operator'
import AddFolderPage from 'components/disk/addfolder'

import useDisk from 'hooks/disk/useDisk'
import useOperator from 'hooks/disk/useOperator'
import useDrag from 'hooks/disk/useDrag'

import { FileType } from 'hooks/disk/type'

import SelectionArea from '../../react/src'

export default function Disk() {
  const { listMethod, handleListMethod, data } = useDisk()

  const {
    creatFolderOpen,
    toogleCreateFolder,
    operatorOpen,
    toogleOperatorOpen
  } = useOperator()

  const {
    isOnDrag,
    files,
    folders,
    handleOndrag,
    handleDragEnter,
    handleDragEnd
  } = useDrag(data)

  return (
    <div className='flex h-screen w-[90%] flex-col max-w-[1280px] mx-auto'>
      <Search />
      <Sort listMethod={listMethod} handleListMethod={handleListMethod} />
      <div className='grow overflow-y-auto'>
        <SelectionArea
          className='grow overflow-y-auto'
          onStart={() => console.log('test start')}
          onMove={() => console.log('test move')}
          selectables='.selectable'
        >
          <Files
            listMethod={listMethod}
            isOnDrag={isOnDrag}
            files={files}
            folders={folders}
            handleOndrag={() => handleOndrag(FileType.Folder)}
            handleDragEnter={handleDragEnter}
            handleDragEnd={handleDragEnd}
          />
        </SelectionArea>
      </div>
      <Operator
        toogleCreateFolder={toogleCreateFolder}
        operatorOpen={operatorOpen}
        toogleOperatorOpen={toogleOperatorOpen}
      />
      <AddFolderPage
        creatFolderOpen={creatFolderOpen}
        toogleCreateFolder={toogleCreateFolder}
      />
    </div>
  )
}
