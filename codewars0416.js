// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth){
    const answer = []
    const area = (2 * height * width) + (2 * depth * width) + (2 * height * depth)
    const volume = (width * height * depth)
    
    answer.push(area, volume)
      return answer
      
    }