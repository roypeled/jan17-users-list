import {getUsersList} from "./creators";

let mockDispatch = {
    dispatch: (action) => {}
};

let mockUserService = {
    getAllUsers: ()=>{
        return {then: cb => cb(true) }
    }
};

let dispatchSpy;

describe("get users list action creator", ()=>{

    beforeEach(()=>{
        dispatchSpy = spyOn(mockDispatch, "dispatch");
        spyOn(mockUserService, 'getAllUsers').and.callThrough();
    });

    it("should get users list", ()=>{
        let thunked = getUsersList(mockUserService);
        thunked(mockDispatch.dispatch);

        expect(mockDispatch.dispatch).toHaveBeenCalled();

        let firstDispatch = mockDispatch.dispatch.calls.argsFor(0)[0];
        expect(firstDispatch.type).toBe("getUsersListRequest");
        expect(mockUserService.getAllUsers).toHaveBeenCalled();

        let secondDispatch = mockDispatch.dispatch.calls.argsFor(1)[0];
        expect(secondDispatch.type).toBe("getUsersListResponse");
        expect(secondDispatch.users).toBe(true);


    });

});
