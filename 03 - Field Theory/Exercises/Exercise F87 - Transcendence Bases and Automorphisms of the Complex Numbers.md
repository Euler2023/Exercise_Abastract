---
title: "Exercise F87: Transcendence Bases and Automorphisms of the Complex Numbers"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - field-automorphisms
  - transcendence-basis
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VIII, printed p. 374, PDF p. 389, Exercise 1"
created: 2026-09-15
---

# Exercise F87: Transcendence Bases and Automorphisms of the Complex Numbers

## Problem Statement

> [!question]
> Prove that the complex numbers have infinitely many automorphisms. [Hint: Use transcendence bases.] Describe all automorphisms and their cardinality.

## Hints

> [!hint]- Hint 1: Transcendence degree of $\mathbb C/\mathbb Q$
> Recall that $\mathbb C$ has cardinality $2^{\aleph_0} = \mathfrak c$, whereas the algebraic closure of $\mathbb Q$, $\overline{\mathbb Q}$, is countable. By considering a transcendence base $B$ of $\mathbb C$ over $\mathbb Q$, what must the cardinality of $B$ be?

> [!hint]- Hint 2: Extending permutations of a transcendence base
> Any bijection $\pi: B \to B$ induces a unique $\mathbb Q$-automorphism of the purely transcendental field $\mathbb Q(B)$. How does an automorphism of a base field extend to an algebraic closure?

> [!hint]- Hint 3: Cardinality and continuity
> Use the fact that $\mathbb C$ is the algebraic closure of $\mathbb Q(B)$. How many permutations of $B$ exist? Which automorphisms are continuous with respect to the standard Euclidean topology on $\mathbb C$?

## Solution

> [!success]-
> ### 1. Size of a transcendence basis
>
> Choose a transcendence basis $B$ of $\mathbb C/\mathbb Q$. Then $\mathbb C$ is algebraic over $\mathbb Q(B)$. If $B$ were finite or countable, $\mathbb Q(B)$ and its algebraic closure would be countable, which is impossible. Put $\kappa=|B|$, now an infinite cardinal. Every rational function uses finitely many elements of $B$, so
> $$
> |\mathbb Q(B)|=\max(\aleph_0,\kappa)=\kappa.
> $$
> An algebraic extension of an infinite field has at most the cardinality of that field: there are only that many polynomials, each with finitely many roots. Thus $|\mathbb C|\le\kappa$. Since $B\subset\mathbb C$, the reverse inequality holds, giving
> $$
> |B|=\mathfrak c=2^{\aleph_0}.
> $$
> This argument does not assume the continuum hypothesis.
>
> ### 2. Constructing and describing all automorphisms
>
> Fix $B$. Let $B'$ be any transcendence basis of $\mathbb C/\mathbb Q$, and choose a bijection $f:B\to B'$. Algebraic independence makes substitution by $f$ a unique $\mathbb Q$-isomorphism
> $$
> \mathbb Q(B)\longrightarrow\mathbb Q(B').
> $$
> The extension theorem for isomorphisms between algebraic closures extends this to an isomorphism $\mathbb C\to\mathbb C$, because $\mathbb C$ is an algebraic closure of each of these two fields. This extension need not be unique. The theorem used here is the usual algebraic-closure extension theorem; its proof uses Zorn's lemma to extend embeddings through algebraic elements.
>
> Conversely, every $\sigma\in\operatorname{Aut}(\mathbb C)$ fixes $\mathbb Q$, carries $B$ onto the transcendence basis $\sigma(B)$, and is one of the algebraic-closure extensions just described. Hence allowing **all target bases $B'$ and all extensions** gives all automorphisms.
>
> Permutations of the fixed set $B$ are sufficient for counting, but do not describe every automorphism. For example, the substitution $b_0\mapsto b_0+1$, fixing $B\setminus\{b_0\}$, is an automorphism of $\mathbb Q(B)$ and extends to $\mathbb C$. Here $b_0+1\notin B$, since otherwise $B$ would satisfy a nonzero polynomial relation.
>
> ### 3. Cardinality of the automorphism group
>
> There are $2^{\mathfrak c}$ permutations of $B$. For the lower bound, partition $B$ into $\mathfrak c$ pairs and independently swap or fix each pair. For the upper bound, every permutation is a function $B\to B$, and
> $$
> |B|^{|B|}=\mathfrak c^{\mathfrak c}
> =(2^{\aleph_0})^{\mathfrak c}=2^{\mathfrak c}.
> $$
> Distinct permutations have distinct extensions because the extensions already differ on $B$. Choosing one extension for each permutation therefore gives $2^{\mathfrak c}$ different automorphisms. Conversely, all automorphisms are functions $\mathbb C\to\mathbb C$, so
> $$
> |\operatorname{Aut}(\mathbb C)|=2^{\mathfrak c}=2^{2^{\aleph_0}}.
> $$
>
> ### 4. Continuous automorphisms
>
> If $\sigma$ is continuous, fixing the dense subfield $\mathbb Q\subset\mathbb R$ implies $\sigma|_{\mathbb R}=\operatorname{id}$. Also $\sigma(i)^2=-1$, so $\sigma(i)=i$ or $-i$. Thus the only continuous automorphisms are identity and complex conjugation.
>
> More generally, if $\sigma(\mathbb R)\subseteq\mathbb R$, then positive real numbers, being nonzero squares of reals, remain positive. Hence $\sigma|_{\mathbb R}$ is order-preserving and fixes rational numbers; rational upper and lower bounds force it to fix every real number. Again $\sigma$ is identity or conjugation. All other automorphisms send some real numbers outside $\mathbb R$.

## Related Concepts

- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic Closure|Algebraic Closure]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]

## Notes

- **Source**: [S2, Ch. VIII, Exercise 1, printed p. 374, PDF p. 389]. The source poses the exercise; the classification and counting argument above are independent derivations.
- **Imported inputs**: Existence and cardinality invariance of transcendence bases, and the extension theorem for isomorphisms to algebraic closures. The construction is carried out with the usual axiom of choice. No additional set-theoretic classification is asserted here.
- **Scope**: A field automorphism need not be continuous and need not preserve a chosen transcendence basis or the real subfield.
