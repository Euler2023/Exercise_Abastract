---
title: 'Exercise R391: The Different of a Local Cyclotomic Extension'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 5, printed p. 208, PDF p. 227
source_refs:
- S4/ch-III/sec-2/ex-5
created: '2026-10-23'
---

# Exercise R391: The Different of a Local Cyclotomic Extension

## Problem Statement

> [!question] Neukirch III.2.5
> If $\zeta$ is a primitive $p^n$-th root of unity, then
> $$
> \mathfrak D_{\mathbb Q_p(\zeta)|\mathbb Q_p}=\mathfrak P^{\,p^{n-1}(pn-n-1)}.
> $$

## Hints

> [!hint]- Hint 1
> 令 $L=\mathbb Q_p(\zeta)$，$e=p^{n-1}(p-1)$。$\Phi_{p^n}(X+1)$ 是 Eisenstein 多项式，因此 $\zeta-1$ 为素元，$\mathcal O_L=\mathbb Z_p[\zeta]$。

> [!hint]- Hint 2
> 在 $\zeta$ 处微分 $\Phi_{p^n}(X)=(X^{p^n}-1)/(X^{p^{n-1}}-1)$，再用不同理想的导数公式。

> [!hint]- Hint 3
> 分母为 $\zeta_p-1$，在 $L$ 中的赋值为 $p^{n-1}$；分子 $p^n$ 的赋值为 $ne$。

## Solution

> [!success]- Independent derivation
> 设 $p$ 为素数，$n\ge1$，$L=\mathbb Q_p(\zeta)$，$\mathfrak P$ 为其整数环的极大理想，$v_L(\mathfrak P)=1$。写
> $$
> f(X)=\Phi_{p^n}(X)=\frac{X^{p^n}-1}{X^{p^{n-1}}-1}=\sum_{j=0}^{p-1}X^{jp^{n-1}},\qquad e=\deg f=p^{n-1}(p-1).
> $$
> 模 $p$ 有 $f(X+1)\equiv X^e$，因为 $X^{p^n}-1=(X^{p^{n-1}}-1)^p$ 在特征 $p$ 成立；又 $f(1)=p\notin p^2\mathbb Z_p$。所以 $f(X+1)$ Eisenstein，$[L:\mathbb Q_p]=e$，扩张全分歧，$\pi=\zeta-1$ 为素元。
>
> 顺带验证整环单生成：任一 $x\in L$ 唯一写为 $\sum_{i=0}^{e-1}a_i\pi^i$，$a_i\in\mathbb Q_p$。各非零项的赋值 $e\,v_p(a_i)+i$ 模 $e$ 互异，故和的赋值是最小项的赋值。若 $x$ 整，则每一项的赋值非负，从 $0\le i<e$ 得 $v_p(a_i)\ge0$。因此 $\mathcal O_L=\mathbb Z_p[\pi]=\mathbb Z_p[\zeta]$。
>
> 对恒等式 $f(X)(X^{p^{n-1}}-1)=X^{p^n}-1$ 求导，并代入 $X=\zeta$，得到
> $$
> f'(\zeta)=\frac{p^n\zeta^{p^n-1}}{\zeta^{p^{n-1}}-1}=\frac{p^n\zeta^{-1}}{\zeta_p-1},\qquad \zeta_p=\zeta^{p^{n-1}}.
> $$
> 同样的 Eisenstein 论证说明 $\zeta_p-1$ 是 $E=\mathbb Q_p(\zeta_p)$ 的素元。全分歧塔有 $[L:E]=p^{n-1}$，因此
> $$
> v_L(p)=e,\qquad v_L(\zeta_p-1)=p^{n-1},\qquad v_L(\zeta)=0.
> $$
> 已证明的不同导数公式 III (2.4) [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, printed pp. 197–198, PDF pp. 216–217] 给出
> $$
> \begin{aligned}
> v_L(\mathfrak D_{L|\mathbb Q_p})
> &=v_L(f'(\zeta))=ne-p^{n-1}\\
> &=p^{n-1}(np-n-1),
> \end{aligned}
> $$
> 即为题设指数。
>
> 核对边界：$n=1$ 时指数 $p-2=e-1$，符合 tame 情形；$p=2,n=1$ 时 $L=\mathbb Q_2$，指数 $0$；$p=2,n=2$ 时指数 $2$，与 $\mathbb Q_2(i)$ 的导数 $2i$ 的赋值一致。

## Related Concepts

- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Different and Discriminant Ideals]]

- [[05 - Galois Theory/Concepts/Higher Ramification Groups and Herbrand Functions|Higher Ramification Groups and Herbrand Functions]]

- [[05 - Galois Theory/Concepts/Cyclotomic Extensions|Cyclotomic Extensions]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Different Ideals]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 5, printed p. 208, PDF p. 227]. 原图指数为 $p^{n-1}(pn-n-1)$。上文给出独立导数和赋值计算，并证明此计算所需的整环单生成性。
- **Notation:** $\mathfrak P$ 是 $L$ 的极大理想；不能把该指数直接当作相对于底域赋值 $v_p(p)=1$ 的指数。
