---
title: "Exercise LA604: The Level Sublattice as a Module"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.7, Exercise 3.7.2, printed p. 97, PDF p. 111"
source_refs:
  - "S7/ch-3/sec-7/ex-2"
created: 2026-10-28
---

# Exercise LA604: The Level Sublattice as a Module

## Problem Statement

> [!question] Original Exercise 3.7.2
> In the context of mapping a matrix conjugacy class to an ideal, show that $L_0(N)$ is an $A$-submodule of $L$.
>
> Here $A=\mathbb Z[\mu_6]$, $\mu_6=e^{2\pi i/6}$, $L=\mathbb Z^2$, $\gamma\in\Gamma_0(N)$ has order six, $(a+b\mu_6)\mathbin{\odot_\gamma}l=(aI+b\gamma)l$, and $L_0(N)=\{(x,y)^t\in L:N\mid y\}$.

## Hints

> [!hint]- Hint 1
> Only stability under $\gamma$ remains after additive closure.

> [!hint]- Hint 2
> The lower-left entry of $\gamma$ is a multiple of $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> Write $\gamma=\begin{pmatrix}r&s\\Nt&u\end{pmatrix}$. For $l=(x,Ny)^t\in L_0(N)$,
> $$
> \gamma l=(rx+sNy,\,N(tx+uy))^t\in L_0(N).
> $$
> The set $L_0(N)$ is already an additive subgroup, closed under multiplication by integers. Therefore $(aI+b\gamma)l\in L_0(N)$ for every $a,b\in\mathbb Z$, proving stability under the whole ring $A$. The action is well defined because $\gamma^2-\gamma+I=0$, the same defining relation as $\mu_6$. Thus $L_0(N)$ is an $A$-submodule and the quotient inherits an $A$-module structure.

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
