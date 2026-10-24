---
title: 'Exercise LA563: Multiplicativity of a Two-Periodic Euler Quotient'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 1, printed p. 314, PDF p. 333
source_refs:
- S4/ch-IV/sec-7/ex-1
created: '2026-10-23'
---

# Exercise LA563: Multiplicativity of a Two-Periodic Euler Quotient

## Problem Statement

> [!question] Neukirch IV.7.1
> Let $f,g$ be endomorphisms of an abelian group $A$ such that $f\circ g=g\circ f=0$. Make sense of the following statement. The quotient
> $$
> q_{f,g}(A)=\frac{(\ker f:\operatorname{im}g)}{(\ker g:\operatorname{im}f)}
> $$
> is multiplicative.

## Hints

> [!hint]- Hint 1
> Interpret multiplicativity on a short exact sequence equipped with two compatible endomorphisms; both homology quotients must be finite.

> [!hint]- Hint 2
> The two alternating differentials define a two-periodic complex. A short exact sequence of complexes gives a cyclic six-term exact sequence in homology.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> The precise meaning of multiplicativity is as follows. Let $0\to A\to B\to C\to0$ be a short exact sequence of abelian groups. Equip all three groups with endomorphisms $f,g$, require every arrow to commute with $f,g$, and assume $fg=gf=0$ on each group. Set
> $$
> H_f(X)=\ker(f:X\to X)/gX,\qquad H_g(X)=\ker(g:X\to X)/fX.
> $$
> When these groups are finite, $q_{f,g}(X)=\#H_f(X)/\#H_g(X)$. The assertion is that if both homology groups of any two objects are finite, then those of the third are finite as well, and $q(B)=q(A)q(C)$.
>
> Construct the connecting map $H_f(C)\to H_g(A)$. For $c\in\ker f_C$ choose a lift $b\in B$. Then $fb\in A$ and $gfb=0$, giving an element of $[fb]$. Changing the lift changes $fA$. Replacing the representative $c$ by $c+gc'$ allows the lift to be replaced by $b+gb'$, and $fgb'=0$. Thus the map is well-defined. Interchanging $f,g$ gives the other connecting map $H_g(C)\to H_f(A)$.
>
> Together with inclusion and projection, these two connecting maps give the cyclic six-term exact sequence
> $$
> H_f(A)\to H_f(B)\to H_f(C)\to H_g(A)\to H_g(B)\to H_g(C)\to H_f(A).
> $$
> For example, if the connecting image of $[c]$ is zero, then $fb=fa$, so $b-a\in\ker f_B$ lifts $c$, proving that the kernel equals the image at this term. If $[a]\in H_g(A)$ is zero in $H_g(B)$, write $a=fb$. Then $c$ is the image of $b$, with $fc=0$, and its connecting image is $[a]$. The other two types of terms follow from the fact that the kernel of projection is $A$ and from the same argument with $f,g$ interchanged.
>
> In a six-term exact cycle of finite groups, multiplying the orders of the images of the arrows and cancelling gives
> $$
> \#H_f(A)\,\#H_f(C)\,\#H_g(B)
> =\#H_f(B)\,\#H_g(A)\,\#H_g(C).
> $$
> This is exactly $q(B)=q(A)q(C)$. The same exact sequence also shows that finiteness of the homology of any two objects forces finiteness for the third.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Periodic Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 1, printed p. 314, PDF p. 333]. Independent specification of the short exact sequence and finiteness assumptions, with construction of the connecting arrows.
- **Boundary:** Without commutation of the arrows with $f,g$, there is no such short exact sequence of complexes, so multiplicativity of this quotient cannot be asserted directly.
