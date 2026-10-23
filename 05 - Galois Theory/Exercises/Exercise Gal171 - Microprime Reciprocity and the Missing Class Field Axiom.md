---
title: 'Exercise Gal171: Microprime Reciprocity and the Missing Class Field Axiom'
topic: galois-theory
difficulty: advanced
status: not-started
tags:
- exercise
- galois-theory
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 3, printed p. 299, PDF p. 318
source_refs:
- S4/ch-IV/sec-5/ex-3
created: '2026-10-23'
---

# Exercise Gal171: Microprime Reciprocity and the Missing Class Field Axiom

## Problem Statement

> [!question] Neukirch IV.5.3
> Let $d:G\to\widehat{\mathbb Z}$ be a surjective homomorphism, $A$ a $G$-module which satisfies axiom (5.1), and let $v:A_k\to\widehat{\mathbb Z}$ be a henselian valuation with respect to $d$.
> Let $K|k$ be a finite extension and let $\operatorname{spec}(K)$ be the set of microprimes of $K$ (see §4, exercise 1–5). Define a canonical mapping
> $$
> r_K:\operatorname{spec}(K)\longrightarrow A_K/N_{\bar k|K}A_{\bar k},
> $$
> and show that, for a finite extension, the diagram
> $$
> \begin{array}{ccc}
> \operatorname{spec}(L)&\xrightarrow{r_L}&A_L/N_{\bar k|L}A_{\bar k}\\
> \pi\downarrow&&\downarrow N_{L|K}\\
> \operatorname{spec}(K)&\xrightarrow{r_K}&A_K/N_{\bar k|K}A_{\bar k}
> \end{array}
> $$
> commutes. Show furthermore that, for every finite Galois extension $L|K$, $r_K$ induces the reciprocity isomorphism
> $$
> r_{L|K}:G(L|K)\longrightarrow A_K/N_{L|K}A_L.
> $$
> **Printed hint:** Let $\varphi\in G_K$ be an element such that $d_K(\varphi)\in\mathbb N$. Let $\Sigma$ be the fixed field of $\varphi$ and
> $$
> \widehat A_\Sigma=\varprojlim_\alpha A_{K_\alpha},
> $$
> where $K_\alpha|K$ varies over the finite subextensions of $\Sigma|K$, and where the projective limit is taken with respect to the norm maps $N_{K_\beta|K_\alpha}:A_{K_\beta}\to A_{K_\alpha}$. Then there is a surjective homomorphism $v_\Sigma:\widehat A_\Sigma\to Z$ and a homomorphism $N_{\Sigma|K}:\widehat A_\Sigma\to A_K$.

> [!warning] Source issue
> The printed reference to §4, Exercise 5 does not exist. The finite Galois group must be replaced by its abelianization; more fundamentally, (5.1) guarantees only a reciprocity homomorphism, not an isomorphism for general ramified extensions. A quadratic counterexample is given below. The final uncompleted norm quotient must also be distinguished from the norm completion.

## Hints

> [!hint]- Hint 1
> Check the hypotheses first: at this point the text has proved only a reciprocity homomorphism. The isomorphism theorem requires the class field axiom (6.1) in the next section. The target is abelian, so a nonabelian Galois group must also be replaced by its abelianization.

> [!hint]- Hint 2
> Test the effect of omitting the class field axiom by taking the product of the usual local multiplicative module and its unit module, with the valuation depending only on the first factor. The unramified conditions remain valid, but a ramified norm quotient acquires an additional factor.

## Solution

> [!success]- Independent derivation
> The final isomorphism claim is false under the printed hypotheses; the missing abelianization is not the only problem. The explicit norm-quotient counterexample below precludes a valid complete proof of the original assertion.
>
> **1. A henselian module still satisfying (5.1).** Work in a separable closure of $k=\mathbb Q_3$. Let $A_0=(k^{sep})^\times$ and let $U_0$ be the subgroup of elements of absolute value $1$. Take
> $$
> A=A_0\times U_0,
> $$
> Let the valuation depend only on the first factor. For a finite subextension $F/k$, we have $A_F=F^\times\times\mathcal O_F^\times$ and $v(N_{F/k}A_F)=f_F\mathbb Z$, so the henselian conditions are exactly those for the usual local valuation. The unit kernel is $U_0\times U_0$.
>
> For a finite unramified cyclic extension $E/F$, the norm $\mathcal O_E^\times\to\mathcal O_F^\times$ is surjective: the norm on residue-field units is surjective, and on successive principal-unit quotients the norm induces the surjective trace of finite residue fields. Correcting successively and passing to a limit by completeness gives surjectivity on units. Thus $H^0(G(E/F),\mathcal O_E^\times)=1$. If a unit $u$ has norm $1$, finite Hilbert 90 gives $u=b^{\sigma-1}$. Since the extension is unramified, a uniformizer of $F$ is also a uniformizer of $E$. Dividing $b$ by a suitable integral power of it makes it a unit without changing the coboundary, so $H^{-1}$ is also $1$. Taking the product of both factors shows that $A$ still satisfies (5.1).
>
> **2. A quadratic ramified quotient already disproves the isomorphism.** Take $L=\mathbb Q_3(\sqrt3)$ and $K=\mathbb Q_3$, so $G(L/K)$ is cyclic of order two. For every unit $u\in\mathcal O_L^\times$, the two conjugates have the same image in the residue field $\mathbb F_3$, and hence
> $$
> N_{L/K}(u)\bmod3=(\bar u)^2=1.
> $$
> Thus $-1\in\mathcal O_K^\times$ is not a norm of a unit. Nor is it a norm from $L^\times$: if the norm has valuation zero, $f=1$ forces the original element to have valuation zero, reducing to the unit case. Therefore both quotients
> $$
> K^\times/N_{L/K}L^\times,\qquad
> \mathcal O_K^\times/N_{L/K}\mathcal O_L^\times
> $$
> have at least two elements, whereas
> $$
> A_K/N_{L/K}A_L\simeq
> (K^\times/NL^\times)\times(\mathcal O_K^\times/N\mathcal O_L^\times)
> $$
> has at least four elements and cannot be isomorphic to the group $G(L/K)$ of order two. The Galois group in this counterexample is already abelian, so inserting $G^{ab}$ alone does not repair the printed assertion.
>
> **3. The valid finite-level content.** Under (5.1) alone, (5.6) of the text gives canonical homomorphisms $r_{L/K}:G(L/K)^{ab}\to A_K/N A_L$, and (5.8) gives compatibility with norms and restriction. Together these form a canonical reciprocity system over all finite Galois levels. A microprime therefore determines a compatible image in the norm completion
> $$
> \varprojlim_{E/K\ finite\ Galois}A_K/N_{E/K}A_E
> $$
> shown above. To require that this image come from the uncompleted quotient $A_K/N_{\bar k/K}A_{\bar k}$, one must additionally prove existence of the norm-compatible prime elements in the printed hint and identify the image of that quotient in the completion. The quotient and its completion cannot simply be treated as the same object.
>
> With the later class field axiom (6.1), the general reciprocity theorem in the text does give isomorphisms for finite-level groups $G(L/K)^{ab}$. Step 2 disproves the exercise as printed. This note therefore does not present either the unproved lift to the uncompleted quotient or the original isomorphism claim as an established result.

## Related Concepts

- [[05 - Galois Theory/Concepts/Class Field Theory and Reciprocity Maps|Class Field Theory and Reciprocity Maps]]

- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions]]
- [[04 - Linear Algebra and Modules/Concepts/Direct and Inverse Limits|Norm Inverse Limits]]
- [[04 - Linear Algebra and Modules/Concepts/Group Cohomology and Standard Resolutions|Norm Cohomology]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. IV, §5, Exercise 3, printed p. 299, PDF p. 318]. The statement and all printed hints are preserved. An independent counterexample disproves the isomorphism under (5.1) alone. The finite-level canonical homomorphisms and their compatibility use (5.6) and (5.8) in the text, printed pp. 294–296 / PDF pp. 313–315.
- **Source issues:** Section 4 has only Exercises 1–4, so the printed reference to 1–5 exceeds its range. The final isomorphism also omits abelianization and the class field axiom. The microprime definition additionally requires the hypothesis on closed abelian subgroups from §4. These omissions cannot be treated as hypotheses already satisfied.
- **Proof boundary:** This note completely disproves the original assertion and gives the valid finite-level replacement. It does not claim to prove surjectivity of the valuation on the general norm inverse limit in the hint, and does not silently identify the uncompleted norm quotient with its completion.
