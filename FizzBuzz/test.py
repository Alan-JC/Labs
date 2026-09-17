import subprocess

# Boilerplate function - include this in every test below!
def prepare_variables(input_array, output_array):
    # Prepare Variables
    input_string = '\n'.join(input_array)
    input_data = input_string.encode('utf-8')
    expected_output = '\n'.join(output_array)

    # Get Actual Output from Input Data
    output_data = subprocess.run(['python', 'main.py'], input=input_data, stdout=subprocess.PIPE)
    output_bytes = output_data.stdout.strip()
    output_string = output_bytes.decode("utf-8")

    # Windows outputs CR, remove it
    actual_output = output_string.replace('\r\n', '\n')

    # Test if Expected Output is found in Actual Output
    return expected_output, actual_output

# Test 1
def test_fizzbuzz_10():
    # Inputs
    input_array = [
        ''
    ]

    # Outputs
    output_array = [
        '1',
        '2',
        'Fizz',
        '4',
        'Buzz',
        'Fizz',
        '7',
        '8',
        'Fizz',
        'Buzz'
    ]

    # Test if Input results in Output
    expected_output, actual_output = prepare_variables(input_array, output_array)
    assert expected_output in actual_output

# Test 2
def test_fizzbuzz_100():
    # Inputs
    input_array = [
        ''
    ]

    # Outputs
    output_array = [
        '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz',
        '11', 'Fizz', '13', '14', 'FizzBuzz', '16', '17', 'Fizz', '19', 'Buzz',
        'Fizz', '22', '23', 'Fizz', 'Buzz', '26', 'Fizz', '28', '29', 'FizzBuzz',
        '31', '32', 'Fizz', '34', 'Buzz', 'Fizz', '37', '38', 'Fizz', 'Buzz',
        '41', 'Fizz', '43', '44', 'FizzBuzz', '46', '47', 'Fizz', '49', 'Buzz',
        'Fizz', '52', '53', 'Fizz', 'Buzz', '56', 'Fizz', '58', '59', 'FizzBuzz',
        '61', '62', 'Fizz', '64', 'Buzz', 'Fizz', '67', '68', 'Fizz', 'Buzz',
        '71', 'Fizz', '73', '74', 'FizzBuzz', '76', '77', 'Fizz', '79', 'Buzz',
        'Fizz', '82', '83', 'Fizz', 'Buzz', '86', 'Fizz', '88', '89', 'FizzBuzz',
        '91', '92', 'Fizz', '94', 'Buzz', 'Fizz', '97', '98', 'Fizz', 'Buzz'
    ]

    # Test if Input results in Output
    expected_output, actual_output = prepare_variables(input_array, output_array)
    assert expected_output in actual_output