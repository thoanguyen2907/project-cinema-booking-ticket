import Axios from 'axios'
import { quanLyPhimService } from '../../../services/QuanLyPhimService';
export const  getCarouselAction= () => {

    return async (dispatch) => {
        try {
            const result = await quanLyPhimService.layDanhSachBanner();
         
            dispatch({
                types: "SET_CAROUSEL", 
                arrImg: result.data.content
            })
        } catch(errors) {
            console.log("errors", errors)
        }
    }
}
