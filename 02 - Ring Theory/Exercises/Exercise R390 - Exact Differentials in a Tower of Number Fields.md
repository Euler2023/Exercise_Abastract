---
title: 'Exercise R390: Exact Differentials in a Tower of Number Fields'
topic: ring-theory
difficulty: advanced
status: not-started
tags:
- exercise
- ring-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 4, printed p. 208, PDF p. 227
source_refs:
- S4/ch-III/sec-2/ex-4
created: '2026-10-23'
---

# Exercise R390: Exact Differentials in a Tower of Number Fields

## Problem Statement

> [!question] Neukirch III.2.4
> For a tower $M\supseteq L\supseteq K$ of algebraic number fields there is an exact sequence of $\mathcal O_M$-modules
> $$
> 0\longrightarrow\Omega^1_{L|K}\otimes\mathcal O_M\longrightarrow\Omega^1_{M|K}\longrightarrow\Omega^1_{M|L}\longrightarrow0.
> $$

## Hints

> [!hint]- Hint 1
> Here $\Omega^1_{L|K}$ means the module of differentials of the integer rings $\mathcal O_L/\mathcal O_K$, not the differentials of the separable field extension itself, which vanish. First use the universal property of derivations to obtain right exactness.

> [!hint]- Hint 2
> For a general tower of rings, the map at the left of the differential sequence need not be injective. This exercise uses the tower formula for differents of number fields.

> [!hint]- Hint 3
> Localize at each DVR. The length of a cyclic differential module is the different exponent. The tower formula makes the length of the middle module equal the sum of the outer lengths, forcing the left-hand kernel to vanish.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Put $A=\mathcal O_K$, $B=\mathcal O_L$, and $C=\mathcal O_M$. In the notation of this chapter, $\Omega^1_{L|K}$ means $\Omega^1_{B|A}$, and likewise for the other two terms. Interpreting these as Kähler differentials of the fields would make all three modules zero and miss the arithmetic content.
>
> **1. Constructing the right exact sequence.** Define
> $$
> \phi:C\otimes_B\Omega^1_{B|A}\longrightarrow\Omega^1_{C|A},\qquad c\otimes db\longmapsto c\,db.
> $$
> The derivation $C\to Q$ into the quotient $Q=\Omega^1_{C|A}/C\,dB$ vanishes on $B$. Every derivation vanishing on $B$ factors uniquely through this quotient. The universal property gives $Q\simeq\Omega^1_{C|B}$. Hence
> $$
> C\otimes_B\Omega^1_{B|A}\xrightarrow{\phi}\Omega^1_{C|A}\longrightarrow\Omega^1_{C|B}\longrightarrow0
> $$
> is right exact.
>
> **2. Computing lengths prime by prime.** Let $\mathfrak Q$ be a nonzero prime of $C$, lying above $\mathfrak P\subset B$. Write $s_{C/A},s_{C/B},s_{B/A}$ for the corresponding different exponents, and set $e=e(\mathfrak Q/\mathfrak P)$. The local description $\Omega\simeq\mathcal O/\mathfrak D$ proved in the preceding exercise gives
> $$
> \ell_{C_{\mathfrak Q}}(\Omega^1_{C|A})_{\mathfrak Q}=s_{C/A},\qquad
> \ell_{C_{\mathfrak Q}}(\Omega^1_{C|B})_{\mathfrak Q}=s_{C/B}.
> $$
> Likewise, $\Omega^1_{B|A,\mathfrak P}\simeq B_{\mathfrak P}/(\pi_{\mathfrak P}^{s_{B/A}})$, so
> $$
> \ell_{C_{\mathfrak Q}}(C\otimes_B\Omega^1_{B|A})_{\mathfrak Q}=e\,s_{B/A}.
> $$
> The tower formula for differents is the independently proved III (2.2)(i) [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, printed pp. 195–196, PDF pp. 214–215]:
> $$
> \mathfrak D_{M|K}=\mathfrak D_{M|L}\mathfrak D_{L|K}C.
> $$
> Applying $v_{\mathfrak Q}$ gives $s_{C/A}=s_{C/B}+e\,s_{B/A}$.
>
> **3. Proving injectivity.** Right exactness from Step 1 gives $\ell(\operatorname{im}\phi)=s_{C/A}-s_{C/B}=e\,s_{B/A}$, equal to the length of the domain of $\phi$. Thus $\ell(\ker\phi)=0$, proving injectivity at $\mathfrak Q$. At the zero prime, all differential modules vanish because the field extensions are separable. The kernel vanishes at every localization and therefore globally. This proves the required short exact sequence.

## Related Concepts

- [[02 - Ring Theory/Concepts/Different and Discriminant Ideals|Different and Discriminant Ideals]]

- [[02 - Ring Theory/Concepts/Universal Derivations and Kahler Differentials|Kähler Differentials]]
- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Different Ideals]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §2, Exercise 4, printed p. 208, PDF p. 227]. This is an independent proof using the universal property and local lengths. The tower formula is the proved formula (2.2); right exactness alone is not mistaken for short exactness.
- **Boundary:** Injectivity on the left uses number-field integer rings and their tower formula for differents. For general $A\to B\to C$, the Kähler differential sequence may have a nonzero left-hand kernel.
