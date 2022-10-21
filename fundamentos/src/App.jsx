import "./App.css";

import First from "./components/basic/First";
import Param from "./components/basic/Param";
import Fragment from "./components/basic/Fragment";
import Random from "./components/basic/Random";
import Card from "./components/layout/Card";
import Family from "./components/basic/Family";
import MemberFamily from "./components/basic/FamilyMember";
import StudentList from "./components/repetition/StudentList";
import ProductTable from "./components/repetition/ProductTable";
import UserInfo from "./components/conditional/UserInfo";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import DirectFather from "./components/communication/DirectFather";
import IndirectFather from "./components/communication/IndirectFather";
import Input from "./components/form/Input";
import Counter from "./components/counter/Counter";
import Euromilhoes from "./components/euromilhoes/Euromilhoes";

export default (props) => {
  return (
    <div className="App">
      <h1>React Fundamentals</h1>
      <div className="Cards">
        <Card title="#01 - First Component">
          <First />
        </Card>

        <Card title="#02 - With Parameter" color="#28ABE3">
          <Param title="Second Component" student="Thompson" grade={9.8} />
        </Card>

        <Card title="#03 - Fragment" color="#FDF200">
          <Fragment />
        </Card>

        <Card title="#04 - Random Challenge" color="#FA6900">
          <Random min={0} max={10} />
        </Card>

        <Card title="#05 - Component with children" color="#8C4646">
          <Family surname="Thompson">
            <MemberFamily name="Carlos" />
            <MemberFamily name="Eduardo" />
            <MemberFamily name="Cadu" />
          </Family>
        </Card>

        <Card title="#06 - Repetition" color="#FF4C65">
          <StudentList></StudentList>
        </Card>

        <Card title="#07 - Repetition Challenge" color="#3A9AD9">
          <ProductTable></ProductTable>
        </Card>

        <Card title="#08 - Conditional Render" color="#982395">
          <EvenOrOdd number={21}></EvenOrOdd>
          <UserInfo user={{ name: "Thompson" }} />
        </Card>

        <Card title="#09 - Direct Communication" color="#59323C">
          <DirectFather></DirectFather>
        </Card>

        <Card title="#10 - Comunicação Indireta" color="#8BAD39">
          <IndirectFather></IndirectFather>
        </Card>

        <Card title="#11 - Controlled Component" color="#E45F56">
          <Input></Input>
        </Card>

        <Card title="#12 - Counter" color="#424242">
          <Counter initialNumber={10}></Counter>
        </Card>

        <Card title="#13 - Euromilhões" color="#B9006E">
          <Euromilhoes qtd={8}></Euromilhoes>
        </Card>
      </div>
    </div>
  );
};
