import React from "react";

function ShortCircuit() {
  const names = ["munsif", "kazmii", "hassan"];
  return (
    <div className="shortCircuit">
      <h1>SHORT CIRCUIT IN REACTJS</h1>
      <h2>
        The 3 logical operators {"( && , || , ! )"} use for Conditional
        rendering like If else statment
      </h2>
      <hr />
      <p>
        1:- true || true; <br /> {"//"} true
        <br /> 2:- true || false;
        <br /> {"//"} true
        <br /> 3:- false || false;
        <br /> {"//"} false
      </p>
      <hr />
      <p>
        <h2>EXAMPLES:-</h2>
        1:- var person = {"{"}
        name: 'Jack', age: 34
        {"}"} <br />
        console.log(person.job || 'unemployed'); <br /> {"//"} 'unemployed'{" "}
        <br />
        What we’ve done is console.log the value of person.job OR the default
        string of 'unemployed'. Since person.job doesn’t exist, we get
        undefined. Since undefined is a falsy value, JavaScript will instead go
        to the other side of the || and accept whatever value is there.
        <br />
        2:- var person = {"{"}
        name: 'Jack', age: 34, job: 'teacher' <br />
        {"}"} <br />
        console.log(person.job || 'unemployed'); <br />
        {"//"} teacher
        <br />
        This time, person.job exists. Therefor, the equation short-circuits and
        the value of person.job (‘teacher’) is logged to the console instead.{" "}
        <hr />
      </p>
      <h2>USE IN REACTJS</h2>
      <p className="array"> const names = ["munsif", "kazmii", "hassan"]; </p>
      <p>
        <h5>Use OF AND OPERATOR IN SHORT CIRCUIT</h5>
        1:- {"{"} names.includes("munsif") && {"<p>"}You are premium User
        {"</p>"}
        {"}"} <br />
        2:- {"{"} names.includes("munsif") &&{" "}
        <span>{"<canAlsoShowAWholeComponent/>"}</span>
        {"}"}
        <br />
        <p className="info">
          {"//"} and ma agr left wala true hoga to && ka right wala part chally
          ga.
        </p>
      </p>
      <p>
        <h5>Use OF OR OPERATOR IN SHORT CIRCUIT</h5>
        1:- {"{"} names.includes("ETC") || {"<p>"}You are not a premium User
        {"</p>"}
        {"}"} <br />
        2:- {"{"} names.includes("ETC") ||{" "}
        <span>{"<canAlsoShowAWholeComponent/>"}</span>
        {"}"}
        <br />
        <p className="info">
          {"//"}
          OR ma agr left wala true hoga to || ka left wala part chally ga or agr
          false hua to Right wala part chally ga.
        </p>
        <hr />
        <h2>EXAMPLE:-</h2>
        var a; <br /> var b = null;
        <br /> var c = undefined;
        <br /> var d = 4;
        <br /> var e = 'five'; <br />
        var f = a || b || c || d || e;
        <br /> GUESS THE ANSWER.?
        <br /> console.log(f);
        <h4>RESULT</h4>
        Did you guess 4? Nice work! If not, that’s okay too, lets break it down:
        <br />
        var a; <span>{"//"} undefined (falsy value)</span>
        <br />
        var b = null;<span>{"//"} null (falsy value)</span>
        <br />
        var c = undefined; <span>{"//"} undefined (falsy value) </span>
        <br />
        var d = 4; <span>{"//"} number (NOT falsy)</span> <br />
        var e = 'five';{" "}
        <span>{"//"} assigment short circuits before reaching here</span> <br />
        var f = a || b || c || d || e;
        <br />
        a, b, c, all are assigned falsy values. When Logical OR sees a falsy
        value, it continues evaluating. Once it reaches variable d with a value
        of 4, the equation short-circuits and the value of 4 is saved to
        variable f.
      </p>
      <hr />
      <h2>RESULT</h2>
      {/* and ma agr left wala true hoga to && ka right wala part chally ga. */}
      {names.includes("munsif") && <p>You are premium User</p>}
      {/* OR ma agr left wala true hoga to || ka left wala part chally ga or agr false hua to Right wala part chally ga. */}
      {names.includes("ETC") || <p>You are not premium User</p>}
    </div>
  );
}

export default ShortCircuit;
