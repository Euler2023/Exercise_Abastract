---
title: "Exercise MF32: Hybrid Level Structures and Hecke Correspondences"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.6, printed pp. 43–44, PDF pp. 58–59; Section 1.5 definitions, printed pp. 38–42, PDF pp. 53–57"
source_refs:
  - "S7/ch-1/sec-5/ex-6"
created: 2026-10-24
---

# Exercise MF32: Hybrid Level Structures and Hecke Correspondences

## Problem Statement

> [!question] Original Exercise 1.5.6
> Let $N$ be a positive integer and let $p$ be prime. Define congruence subgroups of $SL_2(\mathbb Z)$,
> $$
> \Gamma^0(p)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z):
> \begin{pmatrix}a&b\\c&d\end{pmatrix}\equiv\begin{pmatrix}*&0\\*&*\end{pmatrix}\pmod p\right\},
> \qquad\Gamma_1^0(N,p)=\Gamma_1(N)\cap\Gamma^0(p),
> $$
> and define a corresponding modular curve $Y_1^0(N,p)=Y(\Gamma_1^0(N,p))$.
>
> An enhanced elliptic curve for $\Gamma_1^0(N,p)$ is an ordered triple $(E,C,Q)$ where $E$ is a complex elliptic curve, $C$ is a cyclic subgroup of $E$ of order $p$, and $Q$ is a point of $E$ of order $N$ such that $C\cap\langle Q\rangle=\{0_E\}$. Two such triples $(E,C,Q)$ and $(E',C',Q')$ are equivalent if some isomorphism $E\to E'$ takes $C$ to $C'$ and $Q$ to $Q'$. The moduli space is $S_1^0(N,p)=\{\text{enhanced elliptic curves for }\Gamma_1^0(N,p)\}/\sim$. An element is denoted $[E,C,Q]$.
>
> (a) By the proof of Theorem 1.5.1(b), every element takes the form $[\mathbb C/\Lambda_{\tau'},C,1/N+\Lambda_{\tau'}]$. Show that $C$ has a generator of the form $(\tau'+j)/p+\Lambda_{\tau'}$ or $1/p+\Lambda_{\tau'}$, this last possibility arising only if $p\nmid N$. (This idea will be elaborated in Section 5.2.) Show that therefore $C$ and $Q$ can be assumed to take the form
> $$
> C=\left\langle\frac{a\tau'+b}p+\Lambda_{\tau'}\right\rangle,\qquad
> Q=\frac{c\tau'+d}N+\Lambda_{\tau'},\qquad
> \begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL_2(\mathbb Z).
> $$
> Let $\gamma=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ and $\tau=\gamma(\tau')$. Show that $[\mathbb C/\Lambda_{\tau'},C,1/N+\Lambda_{\tau'}]=[\mathbb C/\Lambda_\tau,\langle\tau/p+\Lambda_\tau\rangle,1/N+\Lambda_\tau]$. (A hint for this exercise is at the end of the book.)
>
> (b) Part (a) shows that
> $$
> S_1^0(N,p)=\{[\mathbb C/\Lambda_\tau,\langle\tau/p+\Lambda_\tau\rangle,1/N+\Lambda_\tau]:\tau\in\mathcal H\}.
> $$
> Show that two points corresponding to $\tau,\tau'\in\mathcal H$ are equal if and only if $\Gamma_1^0(N,p)\tau=\Gamma_1^0(N,p)\tau'$, and thus there is a bijection
> $$
> \psi_1^0:S_1^0(N,p)\longrightarrow Y_1^0(N,p),\quad
> [\mathbb C/\Lambda_\tau,\langle\tau/p+\Lambda_\tau\rangle,1/N+\Lambda_\tau]\longmapsto\Gamma_1^0(N,p)\tau.
> $$
> (c) Show that the maps $\Gamma_1^0(N,p)\tau\mapsto\Gamma_1(N)\tau$ and $\Gamma_1^0(N,p)\tau\mapsto\Gamma_1(N)\tau/p$ from $Y_1^0(N,p)$ to $Y_1(N)$ are well defined. Show that the corresponding maps from $S_1^0(N,p)$ to $S_1(N)$ are as described in (1.11).
>
> **Referenced (1.11):** $[E,C,Q]\mapsto[E,Q]$ and $[E,C,Q]\mapsto[E/C,Q+C]$.

## Hints

> [!hint]- Hint 1
> Order-$p$ subgroups are lines in $E[p]\cong\mathbb F_p^2$. With $Q=1/N$, which line can intersect $\langle Q\rangle$ nontrivially?

> [!hint]- Hint 2
> For $C=\langle(\tau'+j)/p\rangle$ use $T^j$. For the remaining line, $p\nmid N$: prescribe an identity matrix modulo $N$ and $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ modulo $p$, then lift using CRT and Exercise 1.2.2.

> [!hint]- Hint 3
> Preservation of $Q$ forces the $\Gamma_1(N)$ congruences; preservation of $\langle\tau/p\rangle$ forces $b\equiv0\pmod p$. For the second map conjugate by $\operatorname{diag}(1,p)$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> **(a) Classify the subgroup.** In $E_{\tau'}[p]$, a nonzero point is $(u\tau'+v)/p$. If $u\ne0$ modulo $p$, rescale it by $u^{-1}$ to obtain $(\tau'+j)/p$. The sole remaining line is $\langle1/p\rangle$. If $p\mid N$, this is the unique order-$p$ subgroup of $\langle1/N\rangle$ and is forbidden. If $p\nmid N$, every order-$p$ subgroup has trivial intersection with the order-$N$ group, so that line is allowed.
>
> For a finite slope use $\gamma=T^j$: its top row gives the required generator and its bottom row keeps $Q=1/N$. For the vertical line with $p\nmid N$, CRT prescribes $\bar\gamma=I\pmod N$ and $\bar\gamma=\begin{pmatrix}0&-1\\1&0\end{pmatrix}\pmod p$ in $SL_2(\mathbb Z/(Np)\mathbb Z)$. Lift this matrix by Exercise 1.2.2. Its top row is $(0,-1)$ modulo $p$ and its bottom row is $(0,1)$ modulo $N$, so it gives the desired subgroup and point. This also covers $N=1$, where the congruences modulo $N$ impose no condition.
>
> In either case put $m=c\tau'+d$ and $\tau=\gamma\tau'$. Multiplication by $m$ takes $\Lambda_\tau$ to $\Lambda_{\tau'}$, $\tau/p$ to $(a\tau'+b)/p$, and $1/N$ to $(c\tau'+d)/N\equiv1/N$. It is therefore the stated isomorphism of triples.
>
> **(b) Identify equivalence.** Suppose multiplication by $m$ identifies two normalized triples. The oriented basis change gives
> $$
> \binom{m\tau}{m}=\gamma\binom{\tau'}1,\qquad\gamma\in SL_2(\mathbb Z).
> $$
> Preservation of $Q$ says $c\equiv0$, $d\equiv1\pmod N$, whence $a\equiv1\pmod N$. Preservation of the cyclic line says $(a\tau'+b)/p$ generates $\langle\tau'/p\rangle$, equivalent to $b\equiv0\pmod p$ and $a\ne0\pmod p$. The latter follows from determinant $1$ once $b\equiv0$. Thus $\gamma\in\Gamma_1^0(N,p)$. Conversely every such matrix gives a scalar isomorphism preserving the line and point. Together with (a), this proves the bijection.
>
> **(c) Check the maps.** The first is well defined by subgroup containment. For $A=\operatorname{diag}(1,p)$ and $\gamma\in\Gamma_1^0(N,p)$,
> $$
> A\gamma A^{-1}=\begin{pmatrix}a&b/p\\pc&d\end{pmatrix}\in\Gamma_1(N).
> $$
> This proves well-definedness of $\tau\mapsto\tau/p$. The first moduli map forgets $C$. For the second the quotient of $E_\tau$ by $\langle\tau/p\rangle$ has lattice $(\tau/p)\mathbb Z+\mathbb Z=\Lambda_{\tau/p}$, and the marked point remains $1/N$. Thus it is $[E,C,Q]\mapsto[E/C,Q+C]$. Its marked point has order exactly $N$: if $nQ\in C$, then $nQ\in C\cap\langle Q\rangle=0$, hence $N\mid n$. Both formulas commute with isomorphisms and agree with (1.11).

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

Independent proof of all three parts. Theorem 1.5.1 and the lifting result from Exercise 1.2.2 (printed p. 21 / PDF p. 36) are named inputs; the finite-line classification and every marking check are proved here. Appendix A, printed p. 415 / PDF p. 426, warns that in the vertical-line case the bottom row need not literally be $(0,1)$; the construction only requires that congruence modulo $N$.
