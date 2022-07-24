function checkCashRegister(price, cash, cid) {

    let change;
  
  
  function calculateCIDTotal(drawer) {
        let result = 0;
        for(let i = 0; i < drawer.length; i++) {
          result += drawer[i][1];
        }
        return result;
      }
      
  
      // function calculateChange(cid, change) {
      //     let result = [];
  
      //     for(let i = cid.length - 1; i >= 0; i--) {
      //       if(change > cid[i]) {
      //         if()
      //       }
      //     }
  
  
  
  
  
      //     return result;
      // }
  
  
      
      
      
      function calculate(price, cash, cid) {
        let change;
        change = cash - price; // Calculate the change due.
        let cidTotal = calculateCIDTotal(cid);
  
        if(cidTotal < change) {
          let obj = new Stats1and2("INSUFFICIENT_FUNDS", []);
          return obj;
        } else if (cidTotal === change) {
          let obj = new Stats1and2("CLOSED", cid)
          return obj;
        } else {
  
          let arr = ["jh"];
          let obj = new OpenStatus("OPEN", arr)
          return obj;
        }
  
  
      }
  
  
      
    // Insufficient funds object constructor
    
      function Stats1and2(status, change) {
        this.status = status;
        this.change = change;
      };
  
      function OpenStatus(status, change) {
        this.status = status;
        this.change = change;
      };
  
  
  
  
  
    
    change = calculate(price, cash, cid);
    
    return change;
  
  }
  
  console.log(checkCashRegister(19.5, 20, 
  [
    ["PENNY", 1.01], 
    ["NICKEL", 2.05], 
    ["DIME", 3.1], 
    ["QUARTER", 4.25], 
    ["ONE", 90], 
    ["FIVE", 55], 
    ["TEN", 20], 
    ["TWENTY", 60], 
    ["ONE HUNDRED", 100]
  ]
  ), "result value");