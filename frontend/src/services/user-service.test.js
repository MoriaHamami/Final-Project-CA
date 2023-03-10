import { httpService } from './http.service'
import { userService } from './user.service'

jest.mock('./http.service')

const mockUser = {
  "_id": "611bd79114e",
  "fullname": "mock user",
  "username": "mockUser",
  "password": "123456",
  "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
}

const mockCred = { username: mockUser.username, password: "sk" }

describe('UserService', () => {

  beforeEach(() => {
    httpService.post.mockReset()
  })

  it('should login successfully', async () => {
    expect.assertions(2)

    const httpResp = mockUser
    httpService.post.mockResolvedValue(httpResp)

    const res = await userService.login(mockCred.username, mockCred.password)
    expect(res).toBe(mockUser)
    expect(httpService.post).toBeCalled()
  })

  it('should load user from cache', async () => {
    expect.assertions(4)

    const mockUser2 = {
      "_id": "611bd79114e",
      "fullname": "mock user",
      "password": "123456",
      "imgUrl": "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"
    }
    const mockCred2 = { username: mockUser2.username, password: "sk" }


    const httpResp = mockUser2
    httpService.post.mockResolvedValue(httpResp)

    const res1 = await userService.login(mockCred2.username, mockCred2.password)
    expect(httpService.post).toHaveBeenCalledTimes(1)
    expect(res1).toBe(mockUser2)

    const res2 = await userService.login(mockCred2.username, mockCred2.password)
    expect(httpService.post).toHaveBeenCalledTimes(1) // here we check that the user loaded from cache and not from http request
    expect(res2).toBe(mockUser2)
  })
})