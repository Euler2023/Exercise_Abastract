---
title: Exact Sequences
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
created: 2026-01-19
---

# Exact Sequences

## Definition

> [!info] Definition (Exact at a Point)
> A sequence of $R$-[[04 - Linear Algebra and Modules/Concepts/Module Definition|modules]] and [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|homomorphisms]]
> $$\cdots \to M_{i-1} \xrightarrow{f_{i-1}} M_i \xrightarrow{f_i} M_{i+1} \to \cdots$$
> is **exact at $M_i$** if $\text{im}(f_{i-1}) = \ker(f_i)$.

> [!info] Definition (Exact Sequence)
> A sequence is **exact** if it is exact at every point (except endpoints).

## Short Exact Sequences

> [!info] Definition (Short Exact Sequence)
> A **short exact sequence (SES)** is:
> $$0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0$$
> where:
> - $f$ is injective ($\ker f = 0$)
> - $g$ is surjective ($\text{im } g = C$)
> - $\text{im } f = \ker g$

> [!tip] Interpretation
> $A$ embeds into $B$, and $C \cong B/f(A)$.

## Key Examples

> [!example] Example 1: Quotient
> $$0 \to N \hookrightarrow M \twoheadrightarrow M/N \to 0$$

> [!example] Example 2: First Isomorphism Theorem
> $$0 \to \ker f \to M \xrightarrow{f} N \to \text{coker } f \to 0$$

> [!example] Example 3: Integers
> $$0 \to \mathbb{Z} \xrightarrow{\times n} \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z} \to 0$$

## Splitting

> [!info] Definition (Split Exact Sequence)
> A SES $0 \to A \xrightarrow{f} B \xrightarrow{g} C \to 0$ **splits** if any of these equivalent conditions hold:
> 1. There exists $s: C \to B$ with $g \circ s = \text{id}_C$ (section)
> 2. There exists $r: B \to A$ with $r \circ f = \text{id}_A$ (retraction)
> 3. $B \cong A \oplus C$

> [!abstract] Theorem
> Every SES of [[04 - Linear Algebra and Modules/Concepts/Vector Spaces|vector spaces]] splits.
>
> SES of modules do **not** always split.

## Long Exact Sequences

> [!info] Definition
> A **long exact sequence** extends indefinitely:
> $$\cdots \to M_{n+1} \to M_n \to M_{n-1} \to \cdots$$

> [!abstract] Snake Lemma
> Given a commutative diagram with exact rows, there is a connecting homomorphism forming a long exact sequence of kernels and cokernels.

## Functors and Exactness

| Functor | Exactness |
|---------|-----------|
| $\text{Hom}(P, -)$ | Left exact; exact if $P$ projective |
| $\text{Hom}(-, I)$ | Left exact; exact if $I$ injective |
| $- \otimes M$ | Right exact; exact if $M$ flat |

## Examples

> [!example] Example 4: Non-split sequence
> $0 \to \mathbb{Z}/2\mathbb{Z} \to \mathbb{Z}/4\mathbb{Z} \to \mathbb{Z}/2\mathbb{Z} \to 0$ does not split.

> [!example] Example 5: Split sequence
> $0 \to \mathbb{Z}/2\mathbb{Z} \to \mathbb{Z}/6\mathbb{Z} \to \mathbb{Z}/3\mathbb{Z} \to 0$ splits.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
