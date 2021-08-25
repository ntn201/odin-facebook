require "test_helper"

class FriendShipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get friend_ships_create_url
    assert_response :success
  end
end
