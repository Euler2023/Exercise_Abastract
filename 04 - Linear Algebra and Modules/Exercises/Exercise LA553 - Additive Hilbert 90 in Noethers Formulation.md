---
title: 'Exercise LA553: Additive Hilbert 90 in Noethers Formulation'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 1, printed p. 283, PDF p. 302
source_refs:
- S4/ch-IV/sec-3/ex-1
created: '2026-10-23'
---

# Exercise LA553: Additive Hilbert 90 in Noethers Formulation

## Problem Statement

> [!question] Neukirch IV.3.1
> Show that Hilbert 90 in Noether's formulation also holds for the additive group $L$ of a Galois extension $L|K$.
> **Printed hint:** Use the normal basis theorem.

## Hints

> [!hint]- Hint 1
> A normal basis generator has nonzero trace; otherwise the sum of all its conjugates would be a nontrivial linear relation. Thus one can find $c\in L$ with trace $1$.

> [!hint]- Hint 2
> In the right-action cocycle notation $z(\sigma\tau)=z(\sigma)^\tau+z(\tau)$, try $b=-\sum_\sigma z(\sigma)c^\sigma$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> First take the finite Galois extension in the setting of Noether's theorem, and write $G=G(L/K)$. The normal basis theorem gives $\theta\in L$ such that $(\theta^\sigma)_{\sigma\in G}$ is a $K$-basis. Its sum $\operatorname{Tr}_{L/K}\theta$ cannot vanish, since that would be a linear relation among the basis vectors with every coefficient equal to $1$. Thus we may set $c=\theta/\operatorname{Tr}\theta$, giving $\sum_\sigma c^\sigma=1$. This also works when the characteristic divides $|G|$.
>
> For any additive $1$-cocycle $z:G\to L$, use the book's right-action convention and define
> $$
> b=-\sum_{\sigma\in G}z(\sigma)c^\sigma.
> $$
> The cocycle identity $z(\sigma)^\tau=z(\sigma\tau)-z(\tau)$ gives
> $$
> \begin{aligned}
> b^\tau
> &=-\sum_\sigma\bigl(z(\sigma\tau)-z(\tau)\bigr)c^{\sigma\tau}\\
> &=-\sum_\rho z(\rho)c^\rho+z(\tau)\sum_\rho c^\rho
> =b+z(\tau).
> \end{aligned}
> $$
> Thus $z(\tau)=b^\tau-b$ is a coboundary and $H^1(G,L)=0$. This proves the full Noether formulation, rather than only the norm-zero formulation for a cyclic group.
>
> If the Galois extension in the question is interpreted as infinite, the conclusion still holds for continuous cocycles. Their images are finite. Choose an open normal subgroup $N$ that fixes every element of the image and satisfies $z|_N=0$. The cocycle then factors through the finite group $G/N$ acting on the finite intermediate extension $L^N$. Apply the finite case just proved, then inflate back to $G$.

## Related Concepts

- [[05 - Galois Theory/Concepts/Normal Basis Theorem|Normal Basis Theorem]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[05 - Galois Theory/Concepts/Hilbert's Theorem 90|Hilbert 90]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 1, printed p. 283, PDF p. 302]. Independent trace-one construction and cocycle calculation, retaining the normal-basis hint. The normal basis theorem is an explicit input.
- **Routing:** The normal basis, trace, and linear summation construction do the main work, so the exercise is routed to linear algebra.
