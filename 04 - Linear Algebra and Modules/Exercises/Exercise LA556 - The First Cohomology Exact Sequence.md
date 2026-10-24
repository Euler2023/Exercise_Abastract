---
title: 'Exercise LA556: The First Cohomology Exact Sequence'
topic: linear-algebra
difficulty: advanced
status: not-started
tags:
- exercise
- linear-algebra
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 6, printed p. 284, PDF p. 303
source_refs:
- S4/ch-IV/sec-3/ex-6
created: '2026-10-23'
---

# Exercise LA556: The First Cohomology Exact Sequence

## Problem Statement

> [!question] Neukirch IV.3.6
> If $1\to A\to B\to C\to1$ is an exact sequence of continuous $G$-modules, then one has an exact sequence
> $$
> 1\longrightarrow A^G\longrightarrow B^G\longrightarrow C^G\longrightarrow H^1(G,A)\longrightarrow H^1(G,B)\longrightarrow H^1(G,C).
> $$

## Hints

> [!hint]- Hint 1
> For $c\in C^G$, choose a lift $b\in B$ and define the connecting cocycle $\sigma\mapsto b^{\sigma-1}$, which takes values in $A$.

> [!hint]- Hint 2
> At each stage, interpret the condition that the image is a coboundary by adjusting a lift or a cocycle so that it is fixed or takes values in the kernel.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Regard $A$ as a submodule of $B$ and write $\pi$ for the quotient map. Exactness at the first two terms of the invariant sequence follows directly from the definition of the kernel. For $c\in C^G$, choose $b\in B$ with $\pi(b)=c$. Then
> $$
> z_b(\sigma)=b^{\sigma-1}\in A.
> $$
> This satisfies the cocycle identity and is continuous because $B$ is a continuous discrete module. Replacing the lift $b$ by $ab$ only multiplies it by the coboundary $a^{\sigma-1}$ in $A$. Thus $\delta(c)=[z_b]$ is well-defined and is a homomorphism because the modules are abelian.
>
> **Exactness at $C^G$.** If $c$ comes from $b\in B^G$, then $z_b=1$. Conversely, if $z_b=a^{\sigma-1}$ for some $a\in A$, then $b/a$ is fixed by $G$ and still maps to $c$. Thus $c$ comes from $B^G$.
>
> **Exactness at $H^1(G,A)$.** The cocycle $\delta(c)$ is the coboundary defined by $b$ in $B$. Conversely, if an $A$-cocycle $z$ equals $b^{\sigma-1}$ in $B$, then $\pi(b)$ is fixed by $G$ and $\delta(\pi(b))=[z]$.
>
> **Exactness at $H^1(G,B)$.** A class coming from $A$ is trivial in $C$. If an $B$-cocycle $z$ maps to the coboundary $c^{\sigma-1}$ in $C$, choose a lift $b\in B$. The image of $z(\sigma)/b^{\sigma-1}$ is identically $1$. Thus it is a cocycle with values in $A$ and represents the same class as $z$ in $H^1(G,B)$. This proves that the kernel equals the image.
>
> Every arrow induced by a module homomorphism preserves continuous cocycles. Continuity for the connecting map has also been checked using the action on a discrete module. This proves all the asserted exactness statements.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group Cohomology]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §3, Exercise 6, printed p. 284, PDF p. 303]. Independent construction of the connecting homomorphism and proof of exactness at each term. No surjectivity onto $H^1(G,C)$ is asserted at the end.
