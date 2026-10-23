---
title: 'Exercise LA564: The Euler Quotient of a Composite Endomorphism'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 2, printed p. 314, PDF p. 333
source_refs:
- S4/ch-IV/sec-7/ex-2
created: '2026-10-23'
---

# Exercise LA564: The Euler Quotient of a Composite Endomorphism

## Problem Statement

> [!question] Neukirch IV.7.2
> Let $f,g$ be two commuting endomorphisms of an abelian group $A$. Show that
> $$
> q_{0,gf}(A)=q_{0,g}(A)q_{0,f}(A),
> $$
> provided all quotients are defined.

## Hints

> [!hint]- Hint 1
> Here $q_{0,f}(A)=\#(A/fA)/\#\ker f$ is the ratio of the cokernel order to the kernel order of an endomorphism.

> [!hint]- Hint 2
> Write the six-term exact sequence of kernels and cokernels for $f$, $g$, and $gf$, then take the orders of the finite groups.

## Solution

> [!success]- Independent derivation
> By definition, $q_{0,f}(A)=\#\operatorname{coker}f/\#\ker f$. Consider the exact sequence
> $$
> 0\to\ker f\to\ker(gf)\xrightarrow f\ker g\xrightarrow\delta\operatorname{coker}f\xrightarrow{\bar g}\operatorname{coker}(gf)\to\operatorname{coker}g\to0,
> $$
> where $\delta(y)=y\bmod fA$, $\bar g(a\bmod fA)=ga\bmod gfA$, and the last arrow is the natural quotient map.
>
> Exactness at the kernel terms follows from the definitions of $f(a)\in\ker g\iff gf(a)=0$ and $\ker f$. At $\ker g$, we have $\delta(y)=0$ if and only if $y=fa$, in which case $a\in\ker(gf)$. At $\operatorname{coker}f$, the condition $ga\in gfA$ is equivalent to $a$ having, modulo $fA$, a representative in $\ker g$. At $\operatorname{coker}(gf)$, the kernel of the map to $\operatorname{coker}g$ is exactly $gA/gfA$, which is also the image of $\bar g$. Thus the entire sequence is exact.
>
> Taking the alternating product of the finite group orders and rearranging gives
> $$
> \frac{\#\operatorname{coker}(gf)}{\#\ker(gf)}
> =\frac{\#\operatorname{coker}g}{\#\ker g}\frac{\#\operatorname{coker}f}{\#\ker f}.
> $$
> This is the desired formula. In fact, the proof does not require $f,g$ to commute; the commutativity assumption in the statement is certainly sufficient.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Kernels and Cokernels]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §7, Exercise 2, printed p. 314, PDF p. 333]. Independent proof using the kernel-cokernel exact sequence.
- **Boundary:** Being defined means that both the kernel and cokernel in question are finite, rather than formally dividing two infinite cardinalities.
