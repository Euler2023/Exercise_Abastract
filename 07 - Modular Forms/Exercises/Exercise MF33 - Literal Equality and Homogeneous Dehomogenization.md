---
title: "Exercise MF33: Literal Equality and Homogeneous Dehomogenization"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.7, printed p. 44, PDF p. 59; Section 1.5 definitions, printed pp. 38–42, PDF pp. 53–57"
source_refs:
  - "S7/ch-1/sec-5/ex-7"
created: 2026-10-24
---

# Exercise MF33: Literal Equality and Homogeneous Dehomogenization

## Problem Statement

> [!question] Original Exercise 1.5.7
> Show that if two enhanced elliptic curves for $\Gamma$ of the special type $(\mathbb C/\Lambda_\tau,\text{(torsion data)})$ are equal then $\tau'=\gamma(\tau)$ for some $\gamma=\begin{pmatrix}1&b\\0&1\end{pmatrix}\in\Gamma$. Show that consequently if $f:\mathcal H\longrightarrow\mathbb C$ is weight-$k$ invariant with respect to $\Gamma$ then formula (1.13) gives a well defined function $F$ on enhanced elliptic curves of the special type.
>
> **Referenced convention and (1.13).** Here $\Gamma$ is $\Gamma_0(N)$, $\Gamma_1(N)$ or $\Gamma(N)$. The special torsion data are respectively $\langle1/N\rangle$, $1/N$, or $(\tau/N,1/N)$, with all points read modulo $\Lambda_\tau$. Formula (1.13) defines $F$ on each such object to be $f(\tau)$.

## Hints

> [!hint]- Hint 1
> Distinguish literal equality of enhanced quotient objects from isomorphism of enhanced curves. Equality here entails $\Lambda_\tau=\Lambda_{\tau'}$.

> [!hint]- Hint 2
> In an oriented integral basis change, the equation $1=c\tau+d$ forces $c=0,d=1$. In the full-level case compare $\tau/N$ and $\tau'/N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> The equality in this exercise is equality of the actual enhanced objects used in (1.13), before passing to their isomorphism classes. Equal quotients of the specified form have the same lattice. Indeed the zero class, as a subset of $\mathbb C$, is the lattice. Oriented basis change therefore gives
> $$
> \binom{\tau'}1=\begin{pmatrix}a&b\\c&d\end{pmatrix}\binom\tau1,\qquad ad-bc=1.
> $$
> Since $\operatorname{Im}\tau>0$, the equation $1=c\tau+d$ implies $c=0,d=1$, and then $a=1$. Thus $\tau'=\tau+b$ for an integer $b$.
>
> For $\Gamma_0(N)$ and $\Gamma_1(N)$, $T^b$ belongs to the group for every integer $b$. The canonical group $\langle1/N\rangle$ or point $1/N$ is unchanged in the equal lattice. For $\Gamma(N)$ equality of the first marked point says
> $$
> \frac{\tau'}N-\frac\tau N=\frac bN\in\Lambda_\tau.
> $$
> A real number in $\Lambda_\tau$ is an integer, by comparison of imaginary parts, so $N\mid b$. Consequently $T^b\in\Gamma(N)$ as required.
>
> Weight-$k$ invariance now gives
> $$
> f(\tau')=f(T^b\tau)=(0\tau+1)^k f(\tau)=f(\tau).
> $$
> Therefore assigning the value $f(\tau)$ to a literal special enhanced object is independent of its parameter representation.
>
> This statement would fail if “equal” meant equal isomorphism classes: arbitrary $\gamma\in\Gamma$ relates those classes. For example $\tau=2i$ and $\tau'=i/2=S(2i)$ define isomorphic unmarked tori, but are not integer translates. In general the values differ by $(c\tau+d)^k$; this is exactly why the extension in the surrounding text is homogeneous, rather than a scalar function on the moduli space when $k\ne0$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

Independent derivation. The equality/isomorphism distinction is essential to the printed statement, not an additional restriction on Theorem 1.5.1. The homogeneous extension rule (1.12), printed p. 41 / PDF p. 56, is $F(m\Lambda,m\text{(data)})=m^{-k}F(\Lambda,\text{(data)})$. No holomorphy or cusp condition is asserted by weight invariance alone.
