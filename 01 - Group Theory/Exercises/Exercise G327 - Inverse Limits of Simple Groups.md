---
title: "Exercise G327: Inverse Limits of Simple Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - simple-groups
  - inverse-limits
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. III, Modules, Exercise 16, printed p. 169, PDF p. 184"
created: 2026-08-29
---

# Exercise G327: Inverse Limits of Simple Groups

## Problem Statement

> [!question] Exercise 16
> Prove that the inverse limit of a system of simple groups in which the homomorphisms are surjective is either the trivial group or a simple group.

## Hints

> [!hint]- Hint 1
> A surjective homomorphism from a simple group to a nontrivial simple group has kernel either trivial or the whole source.

> [!hint]- Hint 2
> If one stage $G_i$ is nontrivial, inspect the cofinal subsystem consisting of all stages $G_j$ with $j\ge i$.

> [!hint]- Hint 3
> On that cofinal subsystem every transition map is an isomorphism, so a compatible family is uniquely determined by its $i$-th coordinate.

## Solution

> [!success]- Solution
> Write the inverse system as
>
> $$
> \{G_i,\varphi_{ji}:G_j\longrightarrow G_i\}_{i\le j},
> $$
>
> with every $\varphi_{ji}$ surjective.
>
> If every $G_i$ is trivial, then the compatible subgroup of $\prod_iG_i$ is trivial, so the inverse limit is the trivial group.
>
> Suppose instead that $G_i$ is nontrivial for some index $i$. For every $j\ge i$, the kernel of
>
> $$
> \varphi_{ji}:G_j\longrightarrow G_i
> $$
>
> is a normal subgroup of the simple group $G_j$. It cannot be all of $G_j$, because the map is surjective onto the nontrivial group $G_i$. Hence
>
> $$
> \ker\varphi_{ji}=\{1\},
> $$
>
> so $\varphi_{ji}$ is an isomorphism. In particular, every group in the upper subsystem
>
> $$
> I_{\ge i}=\{j:j\ge i\}
> $$
>
> is nontrivial, and the same argument shows that every transition map within this subsystem is an isomorphism.
>
> The upper subsystem is cofinal. We now verify directly that projection to the $i$-th coordinate gives an isomorphism
>
> $$
> \varprojlim_jG_j
> \xrightarrow{\sim}
> G_i.
> $$
>
> Compatibility makes a family uniquely determined by its $i$-th coordinate. Conversely, fix $x_i\in G_i$. For any index $k$, choose $\ell\ge i,k$. Since $\varphi_{\ell i}$ is an isomorphism, set
>
> $$
> x_\ell=\varphi_{\ell i}^{-1}(x_i),
> \qquad
> x_k=\varphi_{\ell k}(x_\ell).
> $$
>
> This is independent of the choice of $\ell$: for two choices, pass to a common upper bound and use compatibility together with injectivity of its map to $G_i$. The resulting coordinates form a compatible family, and uniqueness follows by the same common-upper-bound argument. Thus the displayed projection is an isomorphism. Since $G_i$ is simple, the inverse limit is simple.
>
> Therefore the inverse limit is either trivial or simple.

## Related Concepts

- [[01 - Group Theory/Concepts/Simple Groups|Simple Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]
- [[01 - Group Theory/Concepts/Group Homomorphisms|Group Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Direct and Inverse Limits]]

## Notes

- **Convention:** The explicit trivial alternative accommodates a convention under which the trivial group may occur as a stage. If “simple” is defined to mean nontrivial, every transition map is automatically an isomorphism and only the simple alternative occurs.
- **Routing rationale:** Normal subgroups of simple groups and kernels of surjective group homomorphisms do all the essential work, so this exercise is routed to Group Theory.
- **Source status:** The complete one-sentence statement was visually checked at [S2, Ch. III, Ex. 16, printed p. 169, PDF p. 184]. The cofinal-subsystem proof is independent.
