---
title: "Exercise LA681: Lie Algebra of a Block Diagonal Product"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 5, printed p. 74, PDF p. 86"
source_refs:
  - "S10/ch-3/sec-9/ex-5"
created: 2026-11-25
---

# Exercise LA681: Lie Algebra of a Block Diagonal Product

## Problem Statement

> [!question] Original Chapter 3, Exercise 5
> If $G_1\subset\operatorname{GL}(n_1;\mathbb C)$ and $G_2\subset\operatorname{GL}(n_2;\mathbb C)$ are matrix Lie groups and $G_1\times G_2$ is their direct product (regarded as a subgroup of $\operatorname{GL}(n_1+n_2;\mathbb C)$ in the obvious way), show that the Lie algebra of $G_1\times G_2$ is isomorphic to $\mathfrak g_1\oplus\mathfrak g_2$.

## Hints

> [!hint]- Hint 1
> Embed a pair of matrices as a block diagonal matrix. What does the exponential series do to this block structure?

> [!hint]- Hint 2
> If $e^{tX}$ is block diagonal for all real $t$, differentiate its off-diagonal blocks at $t=0$.

> [!hint]- Hint 3
> The bracket on the direct sum is componentwise. Compare it with a commutator of two block diagonal matrices.

## Solution

> [!success]- Solution
> **Proof scope:** Independent block calculation using Hall's exponential definition of the Lie algebra of a matrix group [S10, §3.3, Definition 3.18, printed p. 56, PDF p. 68].
>
> Let $G$ consist of the block diagonal matrices $\operatorname{diag}(A_1,A_2)$ with $A_i\in G_i$. This is a subgroup under block multiplication and inversion. It is closed in $\operatorname{GL}(n_1+n_2;\mathbb C)$ because any convergent sequence of such matrices with invertible limit has block diagonal limit. Invertibility makes both limit blocks invertible, and closedness of each $G_i$ then places the blocks in $G_i$.
>
> By definition, $X$ lies in the Lie algebra $\mathfrak g$ of $G$ if $e^{tX}\in G$ for every real $t$. In that case the off-diagonal blocks of $e^{tX}$ vanish identically. Differentiating at $t=0$ gives zero off-diagonal blocks for $X$, since $e^{tX}=I+tX+O(t^2)$. Write $X=\operatorname{diag}(X_1,X_2)$. The exponential series now gives
> $$
> e^{tX}=\operatorname{diag}(e^{tX_1},e^{tX_2}).
> $$
> Therefore $X\in\mathfrak g$ implies $e^{tX_i}\in G_i$ for each $i$ and each real $t$, so $X_i\in\mathfrak g_i$. Conversely, if $X_i\in\mathfrak g_i$ for both $i$, the same exponential identity puts $e^{tX}$ in $G$ for all real $t$.
>
> It follows that $(X_1,X_2)\mapsto\operatorname{diag}(X_1,X_2)$ is a real-linear bijection $\mathfrak g_1\oplus\mathfrak g_2\to\mathfrak g$. Finally, block multiplication gives
> $$
> [\operatorname{diag}(X_1,X_2),\operatorname{diag}(Y_1,Y_2)]
> =\operatorname{diag}([X_1,Y_1],[X_2,Y_2]).
> $$
> This is precisely the image of the componentwise bracket on the direct sum, so the bijection is a Lie algebra isomorphism.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Direct Sum|Direct Sum]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[06 - Representation Theory/Concepts/Exponential Map|Exponential Map]]

## Notes

- **Source status:** The exercise was checked against the 200 dpi rendering of printed p. 74 / PDF p. 86. The matrix group Lie algebra convention uses real parameters $t$, even for complex block entries.
- **Routing:** The main tools are block diagonal matrices, the exponential series, and the componentwise commutator.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
