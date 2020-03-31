import DirectoryActionTypes from './directory.types';

export const updateDirectory = directoryMap => ({
  type: DirectoryActionTypes.UPDATE_DIRECTORY,
  payload: directoryMap
});
