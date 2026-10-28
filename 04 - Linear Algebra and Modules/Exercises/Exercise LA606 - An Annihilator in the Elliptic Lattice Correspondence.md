---
title: "Exercise LA606: An Annihilator in the Elliptic Lattice Correspondence"
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.7, Exercise 3.7.4, printed p. 97, PDF p. 111"
source_refs:
  - "S7/ch-3/sec-7/ex-4"
created: 2026-10-28
---

# Exercise LA606: An Annihilator in the Elliptic Lattice Correspondence

## Problem Statement

> [!question] Original Exercise 3.7.4
> In the context of checking that the maps between conjugacy classes and ideals invert each other, let $\gamma\in\Gamma_0(N)$ of order six be given and define $(u,v)=(1,\mu_6)m$ as in the section. Show that $u\mathbin{\odot_\gamma}L\subset L_0(N)$, so that $u$ annihilates $L/L_0(N)$. (A hint for this exercise is at the end of the book.)
>
> Here $m=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\operatorname{GL}_2(\mathbb Z)$, $\gamma=m^{-1}\begin{pmatrix}0&-1\\1&1\end{pmatrix}m$, $u=a+c\mu_6$, $L=\mathbb Z^2$, and $L_0(N)$ consists of columns with second entry divisible by $N$.

## Hints

> [!hint]- Hint 1
> The action of $u$ is $aI+c\gamma$; calculate its bottom row.

> [!hint]- Hint 2
> Use $a^2+ac+c^2\equiv0\pmod N$ and $ad-bc=\det m=\pm1$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Put $\delta=\det m\in\{1,-1\}$. Matrix multiplication gives
> $$
> \gamma_{21}=\delta(a^2+ac+c^2),\qquad \gamma_{22}=\delta(ab+ad+cd).
> $$
> Membership in $\Gamma_0(N)$ therefore implies $N\mid a^2+ac+c^2$. The bottom row of $aI+c\gamma$ is $(c\gamma_{21},a+c\gamma_{22})$. Its first entry is divisible by $N$. For its second entry, use $\delta=ad-bc$ to obtain
> $$
> \delta(a+c\gamma_{22})=a(ad-bc)+c(ab+ad+cd)=d(a^2+ac+c^2).
> $$
> Since $\delta$ is a unit, the second entry is also divisible by $N$. Thus $(aI+c\gamma)L\subset L_0(N)$. This is exactly $u\mathbin{\odot_\gamma}L\subset L_0(N)$, proving that the induced action of $u$ on the quotient is zero.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[04 - Linear Algebra and Modules/Concepts/Lattices in Euclidean Space|Lattices in Euclidean Space]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 97 / PDF 111. The solution above is independently derived.
- **Routing:** The principal toolkit is linear-algebra; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
