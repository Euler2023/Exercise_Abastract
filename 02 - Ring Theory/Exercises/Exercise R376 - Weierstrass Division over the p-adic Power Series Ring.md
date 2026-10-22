---
title: 'Exercise R376: Weierstrass Division over the p-adic Power Series Ring'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 8, printed pp. 115–116, PDF pp. 134–135
source_refs:
- S4/ch-II/sec-2/ex-8
created: '2026-10-23'
---

# Exercise R376: Weierstrass Division over the p-adic Power Series Ring

## Problem Statement

> [!question] Neukirch II.2.8
> In the ring $\mathbb Z_p[[X]]$ of formal power series $\sum_{\nu=0}^{\infty}a_\nu X^\nu$ over $\mathbb Z_p$, one has the following division with remainder. Let $f,g\in\mathbb Z_p[[X]]$ and let $f(X)=a_0+a_1X+\cdots$ be such that $p\mid a_\nu$ for $\nu=0,\ldots,n-1$, but $p\nmid a_n$. Then one may write uniquely $g=qf+r$, where $q\in\mathbb Z_p[[X]]$ and $r\in\mathbb Z_p[X]$ has degree $\le n-1$.
>
> **Printed hint.** Let $\tau(\sum_{\nu=0}^{\infty}b_\nu X^\nu)=\sum_{\nu=n}^{\infty}b_\nu X^{\nu-n}$. Show that $U(X)=a_n+a_{n+1}X+\cdots=\tau(f(X))$ is a unit, and write $f(X)=pP(X)+X^nU(X)$ with $\deg P\le n-1$. Show that
> $$
> q(X)=\frac1{U(X)}\sum_{i=0}^{\infty}(-1)^ip^i\left(\tau\circ\frac P U\right)^i\circ\tau(g)
> $$
> is well-defined and satisfies $\tau(qf)=\tau(g)$.

## Hints

> [!hint]- Hint 1
> Use the $p$-adic coefficient norm on $R=\mathbb Z_p[[X]]$, under which $R=\varprojlim R/p^kR$ is complete.

> [!hint]- Hint 2
> Set $h=qU$ and solve $(1+pT)h=\tau(g)$, where $T(h)=\tau((P/U)h)$ preserves $p^kR$.

## Solution

> [!success]- Independent derivation and stated source corrections
> The series $U=\tau(f)$ is invertible because its constant coefficient $a_n$ is a $p$-adic unit: solve successive coefficients of $UU^{-1}=1$, dividing each time by $a_n$. Write $f=pP+X^nU$, where $P$ is a polynomial of degree less than $n$. Let $R=\mathbb Z_p[[X]]$ with the $p$-adic filtration $p^kR$. It is separated, and complete: a compatible family in $R/p^kR$ gives a unique $p$-adic coefficient for each degree, giving an element of $R$ with the stipulated simultaneous reductions.
>
> For $h=qU$, put $T(h)=\tau((P/U)h)$. This additive $\mathbb Z_p$-linear operator maps $p^kR$ into itself. Therefore
> $$
> h=\sum_{i\ge0}(-pT)^i\tau(g)
> $$
> converges in $R$, since its $i$-th term belongs to $p^iR$. Multiplying its partial sums by $1+pT$ and passing to the limit gives $(1+pT)h=\tau(g)$. Put $q=U^{-1}h$ and $r=g-qf$. Then
> $$
> \tau(qf)=h+p\tau((P/U)h)=(1+pT)h=\tau(g),
> $$
> so $\tau(r)=0$, which says exactly that $r$ is a polynomial of degree less than $n$.
>
> If another pair exists, its difference satisfies $(1+pT)(U\Delta q)=0$. This implies $U\Delta q\in p^kR$ for every $k$, by iterating $U\Delta q=-pT(U\Delta q)$. Separatedness gives $\Delta q=0$ and then $\Delta r=0$. At $n=0$, $f=U$ is a unit, $\tau$ is the identity, $P=0$, and the result reads $q=g/f,r=0$. No convergence in the $X$-adic topology is being asserted for the Neumann sum; the controlling topology is $p$-adic.

## Related Concepts

- [[02 - Ring Theory/Concepts/Formal Power Series|Formal Power Series]]
- [[08 - Arithmetic Geometry/Concepts/p-adic Numbers|p-adic Numbers]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]

## Notes

- **Source status:** The original exercise and any printed hint were checked on 200 dpi page images: [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. II, §2, Exercise 8, printed pp. 115–116, PDF pp. 134–135].
- **Proof status:** The argument is independently supplied; imported results and any correction are identified explicitly.
