---
title: "Exercise Rep101: Motions and Vibrations of a Flatland Molecule"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Miscellaneous Ex. M.1, printed p. 320, PDF p. 332"
created: 2026-08-27
---

# Exercise Rep101: Motions and Vibrations of a Flatland Molecule

## Problem Statement

> [!question] Miscellaneous Exercise M.1
> The representations in this problem are real. A molecule $M$ in “Flatland” consists of three like atoms $a_1,a_2,a_3$ forming an equilateral triangle centered at the origin, with $a_1$ on the positive $x$-axis. Its symmetry group is $D_3$. The simultaneous geometric action and permutation of atoms defines a six-dimensional matrix representation $S$ on the state space $V$ of velocity triples. **(a)** For the rotation $\rho$ through $2\pi/3$ and reflection $r$ about the $x$-axis, determine $S_\rho,S_r$. **(b)** Determine the space $W$ of vectors fixed by $S_\rho$ and show that it is $G$-invariant. **(c)** Decompose $W$ and $V$ explicitly into irreducible $G$-invariant subspaces. **(d)** Explain the subspaces in terms of motions and vibrations.

## Hints

> [!hint]- Hint 1
> Write a state as $(v_1,v_2,v_3)$ with $v_i\in\mathbb R^2$.

## Solution

> [!success]- Solution
> Let $R$ be rotation through $2\pi/3$ and $F=\operatorname{diag}(1,-1)$. With atoms ordered cyclically, one consistent convention is
>
> $$
> S_\rho(v_1,v_2,v_3)=(Rv_3,Rv_1,Rv_2),\qquad
> S_r(v_1,v_2,v_3)=(Fv_1,Fv_3,Fv_2).
> $$
>
> Thus
>
> $$
> W=\{(v,Rv,R^2v):v\in\mathbb R^2\}.
> $$
>
> The identity $FR=R^{-1}F$ shows that $S_rW=W$, so $W$ is $D_3$-invariant. Reflection splits $W$ into the two lines obtained from $v$ parallel and perpendicular to $a_1$; these are the trivial and sign representations.
>
> The character of $V$ on the identity, rotations, and reflections is $(6,0,0)$. Hence
>
> $$
> V\cong1\oplus\operatorname{sgn}\oplus2\tau,
> $$
>
> where $\tau$ is the standard real two-dimensional representation, while $W\cong1\oplus\operatorname{sgn}$. The trivial line is uniform radial expansion (“breathing”), the sign line is rigid infinitesimal rotation, one copy of $\tau$ gives translations, and the other gives genuine shape-changing vibrations. $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Representation Theory|Representation Theory Definition]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- The source uses no separate numbered figure; the geometric configuration is fully specified in text at [S1, Ch. 10, Misc. Ex. M.1, printed p. 320, PDF p. 332].

