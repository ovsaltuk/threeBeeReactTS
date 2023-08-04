import './style.scss';

interface BtnProps {
  title: string,
}

export function BtnTransparent(props: BtnProps) {
  return (
    <button className="btn_transparent">{props.title}</button>
  )
}