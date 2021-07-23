const stateDefault = {
heThongRapChieu : []
}

export const QuanLyRapReducer = (state = stateDefault, action) => {
    switch (action.types) {

    case "LAY_DANH_SACH_RAP_CHIEU_PHIM":
        state.heThongRapChieu = action.heThongRapChieu
        return { ...state }

    default:
        return {...state}
    }
}

export default QuanLyRapReducer; 
