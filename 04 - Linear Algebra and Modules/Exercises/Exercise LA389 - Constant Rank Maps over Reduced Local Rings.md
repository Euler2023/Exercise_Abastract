---
title: "Exercise LA389: Constant Rank Maps over Reduced Local Rings"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - local-rings
  - projective-modules
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 16, printed p. 445, PDF p. 460"
created: 2026-09-22
---

# Exercise LA389: Constant Rank Maps over Reduced Local Rings

## Problem Statement

> [!question] Exercise 16
> Let $A$ be a Noetherian local ring without nilpotent elements. Let $f:E\to F$ be a homomorphism of $A$-modules, and suppose $E,F$ are finite free. For each prime $\mathfrak p$ of $A$ let
>
> $$
> f_{(\mathfrak p)}:E_{\mathfrak p}/\mathfrak pE_{\mathfrak p}
> \longrightarrow F_{\mathfrak p}/\mathfrak pF_{\mathfrak p}
> $$
>
> be the corresponding $k(\mathfrak p)$-homomorphism, where $k(\mathfrak p)=A_{\mathfrak p}/\mathfrak pA_{\mathfrak p}$ is the residue class field at $\mathfrak p$. Assume that
>
> $$
> \dim_{k(\mathfrak p)}\operatorname{Im}f_{(\mathfrak p)}
> $$
>
> is constant.
>
> (a) Prove that $F/\operatorname{Im}f$ and $\operatorname{Im}f$ are free, and that there is an isomorphism
>
> $$
> F\approx\operatorname{Im}f\oplus(F/\operatorname{Im}f).
> $$
>
> **Printed hint.** Use Exercise 15.
>
> (b) Prove that $\ker f$ is free and $E\approx(\ker f)\oplus(\operatorname{Im}f)$. **Printed hint.** Use that finite projective is free.

## Hints

> [!hint]- Hint 1
> Apply Exercise 15 first to the cokernel, whose fibre is the cokernel of the fibre map by right exactness. Avoid identifying a tensor product of an image with the image of a tensor product before a splitting has been proved.

> [!hint]- Hint 2
> A surjection onto a free module splits by lifting a basis. Every finite direct summand of a finite free module over a local ring is free; prove this by lifting a minimal residue-field basis and applying Nakayama to the complementary summand.

## Solution

> [!success]- Independently derived solution
> Put $I=\operatorname{Im}f$ and $C=F/I$. Let $b=\operatorname{rank}_A F$ and let $r$ be the common fibre rank of $f$.
>
> **(a) First the cokernel.** Tensoring $E\to F\to C\to0$ with $k(\mathfrak p)$ is right exact. Hence
>
> $$
> C\otimes_Ak(\mathfrak p)\cong\operatorname{coker}f_{(\mathfrak p)},
> \qquad
> \dim_{k(\mathfrak p)}(C\otimes_Ak(\mathfrak p))=b-r.
> $$
>
> The module $C$ is finite. Exercise 15, proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA388 - Constant Fibre Dimension over a Reduced Local Ring|Exercise LA388]], therefore shows that $C$ is free. Lift a basis of $C$ to $F$; the resulting section $s:C\to F$ gives
>
> $$
> F=I\oplus s(C).
> $$
>
> **The local direct-summand lemma.** If $P$ is a finite direct summand of a finite free module over a local ring $(A,\mathfrak m)$, then $P$ is free. Choose lifts of a basis of $P/\mathfrak mP$, of size $t$. Nakayama gives a surjection $A^t\twoheadrightarrow P$. This surjection splits because $P$ is a direct summand of a free module: lift the images of a free basis through the surjection and restrict the resulting lift to $P$. Write
>
> $$
> A^t\cong P\oplus Q.
> $$
>
> The complement $Q$ is finite, since the images under its projection of the $t$ standard basis vectors generate it. Reduction modulo $\mathfrak m$ gives $k^t\cong k^t\oplus Q/\mathfrak mQ$, so $Q/\mathfrak mQ=0$. Nakayama yields $Q=0$, proving $P\cong A^t$.
>
> Apply the lemma to $I\subseteq F$. It follows that $I$ is free and that the required decomposition of $F$ holds.
>
> **(b) Now the kernel.** Since $I$ is free, lift its basis through $E\twoheadrightarrow I$. This produces a section and an isomorphism
>
> $$
> E\cong\ker f\oplus I.
> $$
>
> The kernel is a finite direct summand of the finite free module $E$, so the same lemma shows that it is free. In particular all the asserted splittings survive tensoring with any $A$-module.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Localization of Modules|Localization of Modules]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA388 - Constant Fibre Dimension over a Reduced Local Ring|Exercise LA388]]

## Notes

- **Source status:** Both parts and both printed hints were visually checked at [S2, Ch. X, Ex. 16, printed p. 445, PDF p. 460]. This solution is an independent derivation.
- **Dependency status:** Exercise 15 is used with its proved vault solution. The local finite-projective freeness input requested by the printed hint is proved explicitly here.
- **Boundary:** The decompositions are existence statements and depend on basis lifts. Their tensor consequences are natural, but the chosen complements need not be canonical.
