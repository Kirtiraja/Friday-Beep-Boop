# Friday Beep-Boop Project

## Specifications

| Behavior: | Input Example: | Output Example: |
| - | - | - |
| **Our program should handle:** | **When it receives:** | **It should return:** |
|User can only input a number|||
|The program returns a range of numbers from 0 to the users inputted number| "4" |"0,1,2,3,4"|
|Numbers that contain a "1":all digits are replaced with "Beep!"  | "11"  |"Beep!"  |
|Numbers that contain a 2: all digits are replaced with "Boop!"| "22" | "Boop!" |
|Numbers that contain a 3: all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that."|"30"|"I'm sorry, Dave. I'm afraid I can't do that."|
|Numbers that contain a "3" are replaced with "I'm sorry, Dave. I'm afraid I can't do that." regardless of containing "1" or "2"|"23"|"I'm sorry, Dave. I'm afraid I can't do that."|
|Numbers containing a "2" are replaced with "Boop!" if they don't also contain a "3"|"12"|"Boop!"|
|User is able to enter a new number to see new results over and over. |"1" enter "2" enter|  "Beep!"  "Boop!"|
