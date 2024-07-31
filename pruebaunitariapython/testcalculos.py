import calculos as add_service

def test_suma():
    expected_result = 5
    actual_result = add_service.suma(2,3)
    assert expected_result == actual_result

test_suma() # This will run the test