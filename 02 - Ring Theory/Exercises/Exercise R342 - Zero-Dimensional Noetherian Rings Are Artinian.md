---
title: "Exercise R342: Zero-Dimensional Noetherian Rings Are Artinian"
topic: ring-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - noetherian-rings
  - artinian-rings
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 7, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R342: Zero-Dimensional Noetherian Rings Are Artinian

## Problem Statement

> [!question] Neukirch I.3.7
> In a noetherian ring $R$ in which every prime ideal is maximal, each descending chain of ideals $\mathfrak a_1\supseteq\mathfrak a_2\supseteq\cdots$ becomes stationary.
>
> **Printed hint:** Show as in (3.4) that $(0)$ is a product $\mathfrak p_1\cdots\mathfrak p_r$ of prime ideals and that the chain
> $$
> R\supseteq\mathfrak p_1\supseteq\mathfrak p_1\mathfrak p_2
> \supseteq\cdots\supseteq\mathfrak p_1\cdots\mathfrak p_r=(0)
> $$
> can be refined into a composition series.

## Hints

> [!hint]- Hint 1: Use a maximal counterexample
> Show that every ideal in a Noetherian ring contains a finite product of prime ideals. If a maximal counterexample $I$ is not prime, choose $x,y\notin I$ with $xy\in I$ and compare $I+(x)$, $I+(y)$, and their product.

> [!hint]- Hint 2: Read each filtration factor as a vector space
> Put $I_0=R$ and $I_j=\mathfrak p_1\cdots\mathfrak p_j$. The ideal $\mathfrak p_j$ annihilates $I_{j-1}/I_j$. Why is this quotient finite dimensional over the field $R/\mathfrak p_j$?

> [!hint]- Hint 3: Pass from finite filtrations to descending chains
> A finite-dimensional vector space is Artinian. If a module $M$ has an Artinian submodule $N$ and Artinian quotient $M/N$, check a descending chain by looking at its intersections with $N$ and its images in $M/N$.

## Solution

> [!success]- Independent derivation
> All rings here are commutative with identity. The zero ring satisfies the assertion immediately, so suppose $R\ne0$.
>
> ### 1. Find a zero product of prime ideals
> We first prove that every ideal of a Noetherian ring contains a finite product of prime ideals, allowing the empty product $R$. Suppose otherwise. The ascending chain condition gives an ideal $I$ maximal among those not containing such a product. It is proper, since $R$ contains the empty product, and it is not prime, since a prime ideal contains itself.
>
> Therefore there are $x,y\notin I$ with $xy\in I$. Both $I+(x)$ and $I+(y)$ strictly contain $I$, so each contains a finite product of prime ideals. The product of these two products is contained in
> $$
> (I+(x))(I+(y))
> =I^2+xI+yI+(xy)\subseteq I,
> $$
> a contradiction. Apply the result to $(0)$. Since $R\ne0$, its witnessing product is nonempty, and
> $$
> \mathfrak p_1\cdots\mathfrak p_r=(0)
> $$
> for some prime ideals $\mathfrak p_j$. Repeated factors are permitted.
>
> ### 2. Build a finite filtration with finite-dimensional factors
> Set
> $$
> I_0=R,\qquad I_j=\mathfrak p_1\cdots\mathfrak p_j
> \quad(1\le j\le r).
> $$
> Then $I_r=0$, and multiplication by $\mathfrak p_j$ sends $I_{j-1}$ into $I_j$. Thus $I_{j-1}/I_j$ is naturally a module over $R/\mathfrak p_j$.
>
> Every $\mathfrak p_j$ is maximal by hypothesis, so $R/\mathfrak p_j$ is a field. Since $R$ is Noetherian, $I_{j-1}$ is finitely generated as an $R$-module. Its quotient $I_{j-1}/I_j$ is therefore a finite-dimensional vector space over $R/\mathfrak p_j$.
>
> Choose a basis of each nonzero quotient and take its successive linear spans. Lifting these spans to submodules between $I_j$ and $I_{j-1}$ refines the filtration into a finite composition series: every nonzero successive quotient has dimension one over one of the fields $R/\mathfrak p_j$, and hence is a simple $R$-module. Zero filtration factors are omitted.
>
> ### 3. Prove the descending chain condition
> A finite-dimensional vector space satisfies the descending chain condition because its dimension decreases at every strict inclusion. We also verify that this property is preserved by extensions.
>
> Suppose $N\subseteq M$ and both $N$ and $M/N$ satisfy the descending chain condition. For a descending chain $M_1\supseteq M_2\supseteq\cdots$ of submodules of $M$, the chains $M_i\cap N$ and $(M_i+N)/N$ eventually stabilize. Beyond a common stabilization index, if $x\in M_i$, equality of the images supplies $y\in M_{i+1}$ with $x-y\in N$. Then
> $$
> x-y\in M_i\cap N=M_{i+1}\cap N,
> $$
> so $x\in M_{i+1}$. Hence $M_i=M_{i+1}$, and the original chain stabilizes.
>
> Starting with $I_r=0$ and applying this extension argument successively to
> $$
> 0\longrightarrow I_j\longrightarrow I_{j-1}
> \longrightarrow I_{j-1}/I_j\longrightarrow0
> $$
> proves that $R=I_0$ is Artinian as an $R$-module. Its submodules are exactly its ideals, which proves the asserted stabilization.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]
- [[02 - Ring Theory/Concepts/Jacobson Radical and Artinian Rings|Jacobson Radical and Artinian Rings]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]

## Notes

- **Source verification:** The complete problem and printed hint were visually checked in [S4, Ch. I, §3, Exercise 7, printed p. 23, PDF p. 42]. Its position above the §4 heading places it in §3 despite the page's §4 running header. No source figure is required.
- **Proof status and inputs:** This is an independent derivation following the printed hint. The maximal-counterexample argument adapts the proof of [S4, Ch. I, §3, Lemma (3.4), printed p. 19, PDF p. 38]. That lemma is stated there for nonzero ideals of a Dedekind domain; the proof above separately establishes the version needed for the zero ideal of an arbitrary Noetherian ring. The filtration, composition-series refinement, and extension argument are supplied here.
- **Method boundary:** Reducedness and the domain property are unnecessary. The product giving zero need not be a unique prime factorization. The Noetherian hypothesis supplies both maximal counterexamples and finite generation of the filtration factors; maximality of all primes makes their residue rings fields.
- **Terminology and routing:** Here zero-dimensional means that every prime ideal is maximal. Artinian means the descending chain condition on ideals. Ring Theory is primary; finite-dimensional vector spaces enter as filtration factors.

