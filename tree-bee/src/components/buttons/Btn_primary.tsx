import './style.scss';

interface BtnProps {
  title: string,
}

export function BtnPrimary(props: BtnProps) {
  return (
    <button className="btn_primary">{props.title}</button>
  )
}