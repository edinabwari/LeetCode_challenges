#Given an array of integers nums and an integer target
#return indices of the two numbers such that they add up to target.
# Each input should have one solution and elements shoud not be repeated twice.
nums_array = [2,3,4,5]
target = 8
pairs = False
for  i in range(len(nums_array)):
    for j in range(i + 1, len(nums_array)):
        if nums_array[i] + nums_array[j] == target:
            pairs = True
            print(f"numbers are {nums_array[i]} + {nums_array[j]} = {target}")
if not pairs:          
        print("Invalid set of numbers")
        


            
    
    