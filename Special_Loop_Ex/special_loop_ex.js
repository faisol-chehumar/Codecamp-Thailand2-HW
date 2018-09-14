let Draw = function() {
  this.line = '----------------------'
}

Draw.prototype.br = function(n='') {
  console.log(`(${n})${this.line}`)
}

let draw = new Draw()

draw.star1 = (n) => {
  let star = ''
  for(let i=n; i>0; i--) {
    star += '*'
  }
  console.log(star)
}

draw.star2 = (n) => {
  for(let i=n; i>0; i--) {
    let star = ''
    for(let j=n; j>0; j--) {
      star += '*'
    }
    console.log(star)
  }
}

draw.star3 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      star += j
    }
    console.log(star)
  }
}

draw.star4 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      star += i
    }
    console.log(star)
  }
}

draw.star5 = (n) => {
  for(let i=n; i>0; i--) {
    let star = ''
    for(let j=1; j<=n; j++) {
      star += i
    }
    console.log(star)
  }
}

draw.star6 = (n) => {
  for(let i=0; i<n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      star += j + (n*i)
    }
    console.log(star)
  }
}

draw.star7 = (n) => {
  for(let i=n; i>0; i--) {
    let star = ''
    for(let j=0; j<n; j++) {
      star += (n*i) - j 
    }
    console.log(star)
  }
}

draw.star8 = (n) => {
  for(let i=0; i<n; i++) {
    let star = ''
    star += 2 * i
    console.log(star)
  }
}

draw.star9 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    star += 2 * i
    console.log(star)
  }
}

draw.star10 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      star += j * i
    }
    console.log(star)
  }
}

draw.star11 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      if(j === i) {
        star += '-'
      } else {
        star += '*'
      }
    }    
    console.log(star)
  }
}

draw.star12 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      if(j === n-(i-1)) {
        star += '-'
      } else {
        star += '*'
      }
    } 
    console.log(star)
  }
}

draw.star13 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      if(j <= i) {
        star += '*'
      } else {
        star += '-'
      }
    } 
    console.log(star)
  }
}

draw.star14 = (n) => {
  for(let i=n; i>0; i--) {
    let star = ''
    for(let j=1; j<=n; j++) {
      if(j <= i) {
        star += '*'
      } else {
        star += '-'
      }
    } 
    console.log(star)
  }
}

draw.star15 = (n) => {
  for(let i=1; i<=((n*2)-1); i++) {
    let star = ''
    for(let j=n; j>0; j--) {
      if(j <= Math.abs(n-i)) {
        star += '-'
      } else {
        star += '*'
      }
    } 
    console.log(star)
  }
}

draw.star16 = (n) => {
  for(let i=1; i<=((n*2)-1); i++) {
    let star = ''
    for(let j=n; j>0; j--) {
      if(j <= Math.abs(n-i)) {
        star += '-'
      } else {
        star += i - (Math.floor(i/n) * (2*(i%n)))
      }
    } 
    console.log(star)
  }
}

draw.star17 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=n; j>0; j--) {
      if(j <= i) {
        star += '*'
      } else {
        star += '-'
      }
    } 
    console.log(star)
  }
}

draw.star18 = (n) => {
  for(let i=n; i>0; i--) {
    let star = ''
    for(let j=n; j>0; j--) {
      if(j <= i) {
        star += '*'
      } else {
        star += '-'
      }
    } 
    console.log(star)
  }
}

draw.star19 = (n) => {
  for(let i=1; i<=((n*2)-1); i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      if(j <= Math.abs(n-i)) {
        star += '-'
      } else {
        star += '*'
      }
    } 
    console.log(star)
  }
}

draw.star20 = (n) => {
  let numTmp = 1
  for(let i=1; i<=((n*2)-1); i++) {
    let star = ''
    for(let j=1; j<=n; j++) {
      if(j <= Math.abs(n-i)) {
        star += '-'
      } else {
        star += numTmp
        ++numTmp
      }
    } 
    console.log(star)
  }
}

draw.star21 = (n) => {
  for(let i=1; i<=n; i++) {
    let star = ''
    for(let j=1; j<=((n*2)-1); j++) {
      if(i <= Math.abs(n-j)) {
        star += '-'
      } else {
        star += '*'
      }
    } 
    console.log(star)
  }
}

draw.star22 = (n) => {
  for(let i=n; i>0; i--) {
    let star = ''
    for(let j=1; j<=((n*2)-1); j++) {
      if(i <= Math.abs(n-j)) {
        star += '-'
      } else {
        star += '*'
      }
    } 
    console.log(star)
  }
}

draw.star23 = (n) => {
  for(let i=1; i<=((n*2)-1); i++) {
    let star = ''
    for(let j=1; j<=((n*2)-1); j++) {
      if(i-(2*(Math.floor(i/n) * (i%n))) <= Math.abs(n-j)) {
        star += '-'
      } else {
        star += '*'
      }
    }
    console.log(star)
  }
}

draw.star24 = (n) => {
  let numTmp = 1
  for(let i=1; i<=((n*2)-1); i++) {
    let star = ''
    for(let j=1; j<=((n*2)-1); j++) {
      if(i-(2*(Math.floor(i/n) * (i%n))) <= Math.abs(n-j)) {
        star += '-'
      } else {
        star += numTmp
        ++numTmp
      }
    }
    console.log(star)
  }
}


draw.star1(3)
draw.br(1)
draw.star2(3)
draw.br(2)
draw.star3(3)
draw.br(3)
draw.star4(3)
draw.br(4)
draw.star5(3)
draw.br(5)
draw.star6(3)
draw.br(6)
draw.star7(3)
draw.br(7)
draw.star8(3)
draw.br(8)
draw.star9(3)
draw.br(9)
draw.star10(3)
draw.br(10)
draw.star11(3)
draw.br(11)
draw.star12(3)
draw.br(12)
draw.star13(3)
draw.br(13)
draw.star14(3)
draw.br(14)
draw.star15(3)
draw.br(15)
draw.star16(3)
draw.br(16)
draw.star17(3)
draw.br(17)
draw.star18(3)
draw.br(18)
draw.star19(3)
draw.br(19)
draw.star20(3)
draw.br(20)
draw.star21(3)
draw.br(21)
draw.star22(3)
draw.br(22)
draw.star23(3)
draw.br(23)
draw.star24(3)
draw.br(24)
