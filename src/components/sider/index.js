import { useState } from 'react';
import { Title, Info, Wrapper, Label, Input, RadioButton, Range, InputRang, Reset } from './styled';

function SearchStudent() {
  const [fullName, setFullName] = useState('');
  const [studyGroup, setStudyGroup] = useState('');
  const [groupType, setGroupType] = useState('preparatory');
  const [visitsNumber, setVisitsNumber] = useState({ from: 10, to: 25 });
  const [totalPoints, setTotalPoints] = useState({ from: 10, to: 25 });


  const handleReset = () => {
    setFullName('');
    setStudyGroup('');
    setGroupType('preparatory');
    setVisitsNumber({ from: 10, to: 25 });
    setTotalPoints({ from: 10, to: 25 });
  };


  return (
    <>
      <Title>Выберите студентов</Title>
      <Info>i</Info>
      <Wrapper>
        <Label>ФИО</Label>
        <Input
          type="text"
          value={fullName}
          className="fullName"
          placeholder="Введите значение" onChange={event=>setFullName(event.target.value)} />
        <Label customStyle={{ right: '51.84%', top: '14.78%', bottom: '80.61%' }}>Учебная группа</Label>
        <Input
          type="text"
          placeholder="181-321"
          value={studyGroup}
          onChange={event => setStudyGroup(event.target.value)}
          customStyle={{ right: '7.76%', top: '20.18%', bottom: '74.54%' }} />
        <Label customStyle={{ right: '47.76%', top: '29.42%', bottom: '65.96%' }}>Группа здоровья</Label>
        <RadioButton
          type="radio"
          value="main"
          checked={groupType==='main'}
          onChange={event => setGroupType(event.target.value)}>
          Основная (I)
        </RadioButton>
        <RadioButton
          type="radio"
          value="preparatory"
          checked={groupType === 'preparatory'}
          onChange={event => setGroupType(event.target.value)}
          customStyle={{ right: '92.65%', top: '39.71%', bottom: '57.92%' }}
        >
          Подготовительная (II)
          </RadioButton>
        <RadioButton
          type="radio"
          value="specialA"
          checked={groupType === 'specialA'}
          onChange={event => setGroupType(event.target.value)}
          customStyle={{ right: '92.65%', top: '44.33%', bottom: '53.3%' }}
        >
          Специальная A (III-A)
        </RadioButton>
        <RadioButton
          type="radio"
          value="specialB"
          checked={groupType === 'specialB'}
          onChange={event => setGroupType(event.target.value)}
          customStyle={{ right: '92.65%', top: '44.33%', bottom: '53.3%' }}
        >
          Специальная B (III-B)
          </RadioButton>
        <Label customStyle={{ right: '26.94%', top: '55.41%', bottom: '39.97%' }}>
          Количество посещений
        </Label>
        <Label customStyle={{ right: '92.24%', top: '60.55%', bottom: '34.83%', fontWeight: '300' }}>От</Label>
        <InputRang
          type="text"
          value={visitsNumber.from}
          onChange={event => setVisitsNumber({...visitsNumber,from: event.target.value})}
        />
        <Label
          customStyle={{ left: '49.39%', right: '42.04%', top: '60.55%', bottom: '34.83%', fontWeight: '300' }}
        >
          До
        </Label>
        <InputRang
          type="text"
          value={visitsNumber.to}
          onChange={event => setVisitsNumber({...visitsNumber,to: event.target.value})}
          customStyle={{ left: '61.22%', right: '7.76%' }} />
        <Range
          range
          defaultValue={[visitsNumber.from, visitsNumber.to]}
          onChange={event => setVisitsNumber({ from: event[0], to: event[1] })}
          min={0}
          max={50}
        />
        <Label customStyle={{ right: '58.78%', top: '74.14%', bottom: '21.24%' }}>Всего баллов</Label>
        <Label customStyle={{ top: '79.29%', bottom: '16.09%', right: '92.24%', fontWeight: '300' }}
        >
          От
        </Label>
        <InputRang
          type="text"
          value={totalPoints.from}
          customStyle={{left: '11.02%', right: '57.96%', top: '79.55%', bottom: '16.23 %' }}
        />
        <Label
          customStyle={{ top: '79.29%', bottom: '16.09%', left: '49.39%', right: '42.04%', fontWeight: '300' }}
        >
          До
        </Label>
        <InputRang
          type="text"
          value={totalPoints.to}
          customStyle={{ top: '79.55%', bottom: '16.23%', left: '61.22%', right: '7.76%' }}
        />
        <Range
          range
          defaultValue={[totalPoints.from, totalPoints.to]}
          onChange={event => setTotalPoints({ from: event[0], to: event[1] })}
          min={0}
          max={50}
          customStyle={{ top: '87.86%', bottom: '12.01%' }}
        />
        <Reset onClick={handleReset}>Сбросить фильтры</Reset>
      </Wrapper>
    </>
  );
}

export default SearchStudent;