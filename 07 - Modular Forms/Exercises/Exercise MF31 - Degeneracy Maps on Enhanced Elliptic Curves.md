---
title: "Exercise MF31: Degeneracy Maps on Enhanced Elliptic Curves"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.5, Exercise 1.5.5, printed p. 43, PDF p. 58; Section 1.5 definitions, printed pp. 38–42, PDF pp. 53–57"
source_refs:
  - "S7/ch-1/sec-5/ex-5"
created: 2026-10-24
---

# Exercise MF31: Degeneracy Maps on Enhanced Elliptic Curves

## Problem Statement

> [!question] Original Exercise 1.5.5
> Let $N$ be a positive integer and let $p$ be prime. Define maps $\pi_1,\pi_2:Y_0(Np)\longrightarrow Y_0(N)$ to be $\pi_1(\Gamma_0(Np)\tau)=\Gamma_0(N)\tau$ and $\pi_2(\Gamma_0(Np)\tau)=\Gamma_0(N)(p\tau)$. How do the corresponding maps $\widehat\pi_1,\widehat\pi_2:S_0(Np)\longrightarrow S_0(N)$ act on equivalence classes $[E,C]$? Same question, but for $\Gamma_1(Np)$ and $\Gamma_1(N)$ and $S_1(Np)$ and $S_1(N)$, and then again for $\Gamma(Np)$, etc.

## Hints

> [!hint]- Hint 1
> For $C$ cyclic of order $Np$, distinguish its order-$N$ subgroup $pC$ and its order-$p$ subgroup $NC$. Do not assume $p$ and $N$ are coprime.

> [!hint]- Hint 2
> For $E_\tau$, quotienting by $\langle1/p\rangle$ gives lattice $\tau\mathbb Z+(1/p)\mathbb Z$. Multiplication by $p$ identifies that quotient with $E_{p\tau}$. Transport each marking under this identification.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> For an order-$p$ subgroup $K$ write $q_K:E\to E/K$ for the quotient. All quotients below are holomorphic group quotients.
>
> **Cyclic level.** For $C$ of order $Np$,
> $$
> \widehat\pi_1[E,C]=[E,pC],\qquad
> \widehat\pi_2[E,C]=[E/(NC),C/(NC)].
> $$
> The groups $pC$ and $C/(NC)$ have order $N$, even when $p\mid N$. For the canonical $C=\langle1/(Np)\rangle$ on $E_\tau$, $NC=\langle1/p\rangle$. Its quotient has lattice $L=\tau\mathbb Z+(1/p)\mathbb Z$; multiplication by $p$ takes $L$ to $\Lambda_{p\tau}$ and sends the image of $1/(Np)$ to $1/N$. Thus the second formula corresponds to $\tau\mapsto p\tau$; the first plainly corresponds to $\tau\mapsto\tau$.
>
> **A point of order $Np$.** For $Q$ of exact order $Np$, set $K=\langle NQ\rangle$ and $q=q_K$. Then
> $$
> \widehat\pi_1[E,Q]=[E,pQ],\qquad
> \widehat\pi_2[E,Q]=[E/K,q(Q)].
> $$
> The orders are $N$ and $N$, respectively. On $Q=1/(Np)$ the same lattice calculation sends $q(Q)$ to $1/N$ on $E_{p\tau}$.
>
> **A full symplectic basis.** Suppose $(P,Q)$ is a basis of $E[Np]$ with $e_{Np}(P,Q)=e^{2\pi i/(Np)}$. Set $K=\langle NQ\rangle$ and $q=q_K$. The formulas are
> $$
> \widehat\pi_1[E,(P,Q)]=[E,(pP,pQ)],
> $$
> $$
> \widehat\pi_2[E,(P,Q)]=[E/K,(p\,q(P),q(Q))].
> $$
> To check the full-level conditions, normalize $P=\tau/(Np)$, $Q=1/(Np)$. The first target is $(\tau/N,1/N)$ on $E_\tau$. For the second, multiplication by $p$ on $\mathbb C/L$ sends $p\,q(P)=\tau/N+L$ to $p\tau/N$ and $q(Q)=1/(Np)+L$ to $1/N$. These are exactly the canonical basis of $E_{p\tau}[N]$, so the points have order $N$, generate that group, and have pairing $e^{2\pi i/N}$. This also proves the formula when $p\mid N$. For comparison, simply taking $(q(P),q(Q))$ would leave the first point with the wrong order in general.
>
> All prescriptions commute with isomorphisms of the original enhanced curves, so they are well defined on classes. Finally the orbit maps are well defined at every level: with $A=\operatorname{diag}(p,1)$,
> $$
> A\begin{pmatrix}a&b\\c&d\end{pmatrix}A^{-1}
> =\begin{pmatrix}a&pb\\c/p&d\end{pmatrix}.
> $$
> For $\gamma\in\Gamma_0(Np)$ its lower-left entry is divisible by $Np$, hence the conjugate lies in $\Gamma_0(N)$. If $a,d\equiv1\pmod{Np}$ it lies in $\Gamma_1(N)$, and if additionally $b\equiv0\pmod{Np}$ it lies in $\Gamma(N)$. Containment also makes the first orbit map well defined. Theorem 1.5.1 transports these maps to precisely the formulas above.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Curves and Moduli]]
- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups]]

## Notes

Independent solution. The argument uses the moduli dictionary of Theorem 1.5.1 and scalar identifications of torus quotients, and proves each required compatibility. There is no assumption $p\nmid N$. The factor $p$ on the first basis vector in the full-level second map is essential.
