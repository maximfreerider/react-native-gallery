import {loadPhoto} from '../../service/photo.service';
import {addPhotos} from '../actionCreators/photoActionCreators';

export const fetchPhoto = () => (dispatch) => {
  return loadPhoto()
    .then(photos => dispatch(addPhotos(photos)))
}
