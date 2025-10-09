function solution(record) {
  // Map: (키, 값) 형태로 저장하는 자료구조. 여기서는 "유저ID → 최신 닉네임"
  // name.get('uid123')  => 닉네임
  // name.set('uid123', 'Muzi')  => 저장/갱신
  const name = new Map();

  // logs에는 최종 출력에 필요한 이벤트만 저장한다.
  // "Enter uid" 또는 "Leave uid"만 남기고, "Change"는 출력이 없으니 저장하지 않는다.
  // (닉네임은 나중에 Map에서 최신 값으로 끌어다 써서 문장을 만든다)
  const logs = []; // 예: [['uid123','Enter'], ['uid456','Leave'], ...]

  // 입력 한 줄씩 처리
  for (const line of record) {
    // 한 줄은 "명령어(uid, 닉네임)" 형태. Leave에는 닉네임이 없다.
    const [cmd, uid, nick] = line.split(' ');

    if (cmd === 'Enter') {
      // 들어오면 그 닉네임으로 최신화하고
      name.set(uid, nick);
      // 출력용 로그에 "들어왔다" 이벤트 기록
      logs.push([uid, 'Enter']);
    } else if (cmd === 'Leave') {
      // 나가면 닉네임은 주어지지 않음. 출력만 필요하니 이벤트만 기록
      logs.push([uid, 'Leave']);
    } else {
      // cmd === 'Change'
      // 닉네임만 최신화. 출력은 하지 않음(문장 생성 X)
      name.set(uid, nick);
    }
  }

  // msg: 이벤트 종류별로 문장을 만들어주는 "함수 모음(사전)".
  // 나중에 msg[type](uid) 형태로 호출해서 문자열을 뽑아낸다.
  const msg = {
    Enter: uid => `${name.get(uid)}님이 들어왔습니다.`,
    Leave: uid => `${name.get(uid)}님이 나갔습니다.`
  };

  // logs에 쌓아둔 순서대로 문장을 만들기
  // 이때 name.get(uid)는 "최신 닉네임"이므로 과거 로그도 자동으로 최신 닉네임로 바뀐다.
  return logs.map(([uid, type]) => msg[type](uid));
}
