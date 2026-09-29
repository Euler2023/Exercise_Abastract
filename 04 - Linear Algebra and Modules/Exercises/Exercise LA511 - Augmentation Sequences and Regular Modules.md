---
title: "Exercise LA511: Augmentation Sequences and Regular Modules"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 15, printed pp. 829–830, PDF pp. 844–845"
created: 2026-09-29
---

# Exercise LA511: Augmentation Sequences and Regular Modules

## Problem Statement

> [!question] Lang XX.15 — Printed splitting assertion
> Consider the exact sequences:
> $$
> (1)\qquad0\longrightarrow I_G\longrightarrow\mathbb Z[G]
> \xrightarrow{\varepsilon}\mathbb Z\longrightarrow0,
> $$
> $$
> (2)\qquad0\longrightarrow\mathbb Z\xrightarrow{\varepsilon'}
> \mathbb Z[G]\longrightarrow J_G\longrightarrow0,
> $$
> where the first one defines $I_G$, and the second is defined by the embedding $\varepsilon':\mathbb Z\to\mathbb Z[G]$ such that
> $$
> \varepsilon'(n)=n\left(\sum_\sigma\sigma\right),
> $$
> i.e. on the “diagonal”. The cokernel of $\varepsilon'$ is $J_G$ by definition.
>
> (a) Prove that both sequences (1) and (2) split in $\operatorname{Mod}(G)$.
>
> (b) Define $M'_G(A)=\mathbb Z[G]\otimes A$ (tensor product over $\mathbb Z$) for $A\in\operatorname{Mod}(G)$. Show that $M'_G(A)$ is $G$-regular, and that one gets exact sequences $(1_A)$ and $(2_A)$ by tensoring (1) and (2) with $A$. As a result one gets an embedding
> $$
> \varepsilon'_A=\varepsilon'\otimes\mathrm{id}:
> A=\mathbb Z\otimes A\longrightarrow\mathbb Z[G]\otimes A.
> $$

> [!warning] Source issue: the sequences split over $\mathbb Z$, generally not over $\mathbb Z[G]$
> For a nontrivial finite group, neither sequence splits in $\operatorname{Mod}(G)$. The intended splitting category in (a) is $\operatorname{Mod}(\mathbb Z)$. This underlying splitting is exactly what ensures tensoring with arbitrary $A$ is exact.
>
> Throughout (b), use the diagonal action $g(h\otimes a)=gh\otimes ga$, as required to make the displayed maps equivariant.

## Hints

> [!hint]- Hint 1: Find nonequivariant splittings
> For (1), send $n$ to $n\cdot1$. For (2), take the coefficient of $1$ in $\mathbb Z[G]$.

> [!hint]- Hint 2: Project onto the identity-coordinate copy of $A$
> On $\bigoplus_{h\in G}h\otimes A$, let $u$ kill all summands except the one for $h=1$. Compute $\sum_g g u g^{-1}$.

## Solution

> [!success]- Independent counterexamples and proof of the corrected assertions
> Put $N_G=\sum_{g\in G}g$ and $n=|G|$.
>
> **(a), the printed category.** A $G$-linear section of $\varepsilon$ would send $1\in\mathbb Z$ to an invariant element of $\mathbb Z[G]$. Such elements are exactly $mN_G$ with $m\in\mathbb Z$, since invariance under left translation forces all coefficients to agree. Its augmentation is $mn$, which cannot be $1$ if $n>1$.
>
> A $G$-linear retraction of $\varepsilon'$ would be a homomorphism $r:\mathbb Z[G]\to\mathbb Z$ to the trivial module. All values $r(g)$ would equal a common integer $m$, so $r(N_G)=nm\ne1$ if $n>1$. Thus (2) also fails to split equivariantly.
>
> As abelian groups, however, (1) splits by the section $s(1)=1\in\mathbb Z[G]$. Sequence (2) splits by the retraction $r(\sum_g a_g g)=a_1$, since $r(N_G)=1$. This proves the corrected version of (a). If $G$ is trivial, both original splitting assertions hold as well.
>
> **(b), regularity.** Every element of $M'_G(A)$ is uniquely $\sum_{h\in G}h\otimes a_h$. Define
> $$
> u\left(\sum_hh\otimes a_h\right)=1\otimes a_1.
> $$
> For $h\otimes a$, its translate by $g^{-1}$ is $g^{-1}h\otimes g^{-1}a$. The map $u$ kills this unless $g=h$. The remaining term after translating back is $h\otimes a$. Therefore
> $$
> \sum_{g\in G}gug^{-1}=\mathrm{id}_{M'_G(A)},
> $$
> proving $G$-regularity.
>
> Tensoring a split short exact sequence of abelian groups with any abelian group preserves its direct-sum decomposition and thus exactness. Tensoring (1) and (2) gives
> $$
> 0\longrightarrow I_G\otimes A\longrightarrow\mathbb Z[G]\otimes A
> \xrightarrow{\varepsilon\otimes1}A\longrightarrow0
> $$
> and
> $$
> 0\longrightarrow A\xrightarrow{\varepsilon'\otimes1}
> \mathbb Z[G]\otimes A\longrightarrow J_G\otimes A\longrightarrow0.
> $$
> Give every tensor product the diagonal action. Since $\varepsilon,\varepsilon'$ are equivariant before tensoring, all arrows are $G$-linear. In particular,
> $$
> \varepsilon'_A(a)=N_G\otimes a=\sum_{g\in G}g\otimes a
> $$
> is a $G$-linear embedding; it is split as a map of abelian groups by projection onto the identity coordinate.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor product]]
- [[06 - Representation Theory/Concepts/Group Algebra|Augmentation ideal]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 15, printed pp. 829–830, PDF pp. 844–845]. The prime in $M'_G(A)$ distinguishes this tensor model from the earlier function module $M_G(A)$.
- Proof status: independent counterexamples and corrected proof. The finite-group hypothesis is inherited from the preamble before Exercise 14.
- No flatness assumption on $A$ is needed, since the source sequences split over $\mathbb Z$.
- The diagonal action is essential here. An action on the group-ring factor alone would not make $a\mapsto N_G\otimes a$ equivariant for a nontrivial action on $A$.

