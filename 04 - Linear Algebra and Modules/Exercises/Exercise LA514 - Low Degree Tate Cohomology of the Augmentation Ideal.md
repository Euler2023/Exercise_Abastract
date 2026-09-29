---
title: "Exercise LA514: Low Degree Tate Cohomology of the Augmentation Ideal"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - group-cohomology
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XX, Exercise 18, printed p. 830, PDF p. 845"
created: 2026-09-29
---

# Exercise LA514: Low Degree Tate Cohomology of the Augmentation Ideal

## Problem Statement

> [!question] Lang XX.18
> Let $\mathbf H=\mathbf H_G$ be the special cohomology functor for a finite group $G$. Show that:
> $$
> \mathbf H^0(I_G)=0;\qquad
> \mathbf H^0(\mathbb Z)\simeq\mathbf H^1(I)\simeq\mathbb Z/n\mathbb Z
> \quad\text{where }n=\#(G);
> $$
> $$
> \mathbf H^0(\mathbb Q/\mathbb Z)=\mathbf H^1(\mathbb Z)
> =\mathbf H^2(I)=0;
> $$
> $$
> \mathbf H^1(\mathbb Q/\mathbb Z)\simeq\mathbf H^2(\mathbb Z)
> \simeq\mathbf H^3(I)\simeq G^\wedge
> =\operatorname{Hom}(G,\mathbb Q/\mathbb Z)\quad\text{by definition}.
> $$

> [!info] Special cohomology and coefficient actions
> We use the corrected convention from Exercise 17: $\mathbf H^0(A)=A^G/T_GA$ and $\mathbf H^q(A)=H^q(G,A)$ for $q>0$, with no initial zero before its degree-zero long exact sequence. The groups $\mathbb Z,\mathbb Q,\mathbb Q/\mathbb Z$ have trivial $G$-action, and $I=I_G$ is the augmentation ideal with its natural group-ring action.

## Hints

> [!hint]- Hint 1: Use the augmentation short exact sequence
> The group ring is regular, so its special cohomology vanishes in all nonnegative degrees. Its invariants are exactly the integer multiples of $\sum_g g$.

> [!hint]- Hint 2: Shift once more with rational coefficients
> In $0\to\mathbb Z\to\mathbb Q\to\mathbb Q/\mathbb Z\to0$, the middle module is regular: multiplication by $1/|G|$ has group trace equal to the identity. For trivial action, one-cocycles are group homomorphisms.

## Solution

> [!success]- Independent norm computation and dimension shifting
> Put $n=|G|$ and $N_G=\sum_{g\in G}g$. The invariants of $\mathbb Z[G]$ are $\mathbb ZN_G$: invariance under every left translation makes all coefficients equal. Since $\varepsilon(mN_G)=mn$, we get
> $$
> I_G^G=I_G\cap\mathbb ZN_G=0.
> $$
> Thus $\mathbf H^0(I_G)=0$. The norm on the trivial module $\mathbb Z$ is multiplication by $n$, so
> $$
> \mathbf H^0(\mathbb Z)=\mathbb Z/n\mathbb Z.
> $$
>
> The group ring is $G$-regular (project onto its identity coefficient and sum the conjugates), so $\mathbf H^q(\mathbb Z[G])=0$ for all $q\ge0$. Apply the corrected long exact sequence to
> $$
> 0\longrightarrow I_G\longrightarrow\mathbb Z[G]
> \xrightarrow{\varepsilon}\mathbb Z\longrightarrow0.
> $$
> Since the middle cohomology vanishes, its connecting maps yield
> $$
> \mathbf H^q(\mathbb Z)\xrightarrow{\sim}\mathbf H^{q+1}(I_G)
> \qquad(q\ge0).
> $$
> In particular, $\mathbf H^1(I_G)\simeq\mathbb Z/n\mathbb Z$.
>
> For a trivial coefficient action, the one-cocycle identity is $f(xy)=f(x)+f(y)$ and every one-coboundary is zero. Therefore
> $$
> H^1(G,\mathbb Z)=\operatorname{Hom}(G,\mathbb Z)=0,
> $$
> because the finite image of a finite group in the torsion-free group $\mathbb Z$ is zero. Dimension shifting gives $\mathbf H^2(I_G)=0$.
>
> Multiplication by $n$ on $\mathbb Q/\mathbb Z$ is surjective: a class of a rational number $r$ is $n$ times the class of $r/n$. Hence
> $$
> \mathbf H^0(\mathbb Q/\mathbb Z)
> =(\mathbb Q/\mathbb Z)/n(\mathbb Q/\mathbb Z)=0.
> $$
> This proves the second displayed line.
>
> Finally, the trivial $G$-module $\mathbb Q$ is regular: for $u(a)=a/n$, $\sum_g gug^{-1}=nu=\mathrm{id}$. Its special cohomology vanishes in every nonnegative degree. Applying the long exact sequence to
> $$
> 0\longrightarrow\mathbb Z\longrightarrow\mathbb Q
> \longrightarrow\mathbb Q/\mathbb Z\longrightarrow0
> $$
> gives $\mathbf H^1(\mathbb Q/\mathbb Z)\simeq\mathbf H^2(\mathbb Z)$. The earlier augmentation shift gives $\mathbf H^2(\mathbb Z)\simeq\mathbf H^3(I_G)$. Since the action on $\mathbb Q/\mathbb Z$ is trivial,
> $$
> \mathbf H^1(\mathbb Q/\mathbb Z)
> =H^1(G,\mathbb Q/\mathbb Z)
> =\operatorname{Hom}(G,\mathbb Q/\mathbb Z)=G^\wedge.
> $$
> Combining the three isomorphisms proves the final line. The proof includes the trivial group, for which $n=1$ and all the displayed groups vanish.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Group cohomology and standard resolutions]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective modules]]
- [[06 - Representation Theory/Concepts/Group Algebra|Augmentation ideal]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA513 - Nonnegative Tate Cohomology and Regular Modules|The corrected special cohomology functor]]

## Notes

- Source checked at [S2, Ch. XX, Exercise 18, printed p. 830, PDF p. 845]. The three displayed lines are preserved, including the source's alternating notation $I_G$ and $I$.
- Proof status: independent derivation by norms, one-cocycles, and the exact sequences. The long exact sequence uses the corrected convention proved in Exercise 17.
- The notation $G^\wedge$ here means the group of homomorphisms into $\mathbb Q/\mathbb Z$; no assumption that $G$ itself is abelian is needed. Such homomorphisms automatically factor through its abelianization.

