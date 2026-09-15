---
title: "Exercise Gal137: Transitive Action on Prime Ideals in Infinite Galois Extensions"
topic: galois-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - galois-theory
  - infinite-galois-theory
  - zorns-lemma
  - prime-ideals
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 6, printed p. 353, PDF p. 368"
created: 2026-09-15
---

# Exercise Gal137: Transitive Action on Prime Ideals in Infinite Galois Extensions

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 6
> Generalize the results of §2 to infinite Galois extensions, especially Propositions 2.1 and 2.5, using Zorn's lemma.

## Hints

> [!hint]- Hint 1: Recall the finite statements in §2
> Proposition 2.1 states that for a finite Galois extension $L/K$ with group $G$, $G$ acts transitively on the prime ideals $\mathfrak P$ of $B$ lying above $\mathfrak p$. Proposition 2.5 establishes the exact sequence $1 \to I_{\mathfrak P} \to G_{\mathfrak P} \to \operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p}) \to 1$.

> [!hint]- Hint 2: Set up a poset of compatible partial automorphisms
> To prove transitivity for two primes $\mathfrak P_1, \mathfrak P_2$ lying above $\mathfrak p$, consider pairs $(E, \sigma)$ where $E$ is an intermediate Galois subfield of $L/K$ and $\sigma\in\operatorname{Gal}(E/K)$ maps $\mathfrak P_1\cap E$ to $\mathfrak P_2\cap E$.

> [!hint]- Hint 3: Apply Zorn's lemma to reach a maximal subfield
> Show that every chain has an upper bound by gluing. If the maximal subfield $M$ is not $L$, adjoin an element $\alpha\in L\setminus M$, form its finite Galois closure over $M$, and use the finite Proposition 2.1 to extend $\sigma$, reaching a contradiction.

> [!hint]- Hint 4: Deduce the exact sequence for decomposition and inertia groups
> Express $G_{\mathfrak P}$ and $I_{\mathfrak P}$ as projective limits of their finite counterparts, or extend automorphisms of residue field extensions to $B$ using Zorn's lemma.

## Solution

> [!success]- Complete Derivation
> Let $A$ be an integral domain, integrally closed in its fraction field $K$. Let $L$ be an arbitrary (possibly infinite) Galois extension of $K$ with Galois group $G=\operatorname{Gal}(L/K)$. Let $B$ be the integral closure of $A$ in $L$, and let $\mathfrak p$ be a prime ideal of $A$.
> 
> ### Part 1: Generalization of Proposition 2.1 (Transitivity of $G$ on Prime Ideals)
> 
> **Theorem:** Let $\mathfrak P_1$ and $\mathfrak P_2$ be two prime ideals of $B$ lying above $\mathfrak p$. Then there exists $\sigma\in G=\operatorname{Gal}(L/K)$ such that $\sigma(\mathfrak P_1) = \mathfrak P_2$.
> 
> **Proof via Zorn's Lemma:**
> 
> Let $\mathcal F$ be the set of all pairs $(E, \tau)$ satisfying:
> 1. $E$ is an intermediate field $K\subseteq E\subseteq L$ such that $E/K$ is a Galois extension;
> 2. $\tau \in \operatorname{Gal}(E/K)$ satisfies:
>    $$
>    \tau(\mathfrak P_1 \cap E) = \mathfrak P_2 \cap E.
>    $$
> 
> Note that $\mathcal F$ is non-empty, since $(K, \operatorname{id}_K)\in\mathcal F$ (with $\mathfrak P_1\cap K = \mathfrak p = \mathfrak P_2\cap K$).
> 
> Define a partial order $\le$ on $\mathcal F$ by declaring:
> $$
> (E_1, \tau_1) \le (E_2, \tau_2) \iff E_1 \subseteq E_2\quad\text{and}\quad \tau_2|_{E_1} = \tau_1.
> $$
> 
> Let $\mathcal C = \{(E_i, \tau_i)\}_{i\in I}$ be a totally ordered chain in $\mathcal F$.
> Define $E_\infty = \bigcup_{i\in I} E_i$.
> Since each $E_i/K$ is Galois (normal and separable), their directed union $E_\infty/K$ is normal and separable, hence a Galois extension of $K$.
> 
> Define $\tau_\infty: E_\infty \to E_\infty$ by setting $\tau_\infty(x) = \tau_i(x)$ whenever $x\in E_i$. This is well-defined because $\mathcal C$ is totally ordered and compatible under restrictions.
> 
> For any $x\in E_\infty$:
> $$
> x \in \mathfrak P_1 \cap E_\infty \iff \exists i\text{ with }x\in \mathfrak P_1 \cap E_i \iff \tau_i(x)\in\mathfrak P_2 \cap E_i \iff \tau_\infty(x)\in\mathfrak P_2 \cap E_\infty.
> $$
> Thus $\tau_\infty(\mathfrak P_1\cap E_\infty) = \mathfrak P_2\cap E_\infty$, so $(E_\infty, \tau_\infty)\in\mathcal F$ is an upper bound for the chain.
> 
> By Zorn's lemma, $\mathcal F$ contains a maximal element $(M, \sigma_M)$.
> 
> **Claim:** $M = L$.
> 
> Suppose for contradiction that $M \subsetneq L$. Then there exists an element $\alpha\in L\setminus M$.
> Since $\alpha$ is algebraic and separable over $K$, let $f(X)=\operatorname{Irr}(\alpha, M, X)$. The splitting field of $f(X)$ over $M$, denoted $M'$, is a finite Galois extension of $M$, and $M'/K$ is a Galois extension contained in $L$.
> 
> Let $B_{M'} = B \cap M'$ and $B_M = B \cap M$ be the integral closures of $A$ in $M'$ and $M$, respectively.
> 
> Under the automorphism $\sigma_M\in\operatorname{Gal}(M/K)$, $\sigma_M(B_M) = B_M$.
> The prime $\mathfrak q_1 = \mathfrak P_1 \cap M'$ lies above $\mathfrak P_1 \cap M$.
> The prime $\mathfrak q_2 = \mathfrak P_2 \cap M'$ lies above $\mathfrak P_2 \cap M = \sigma_M(\mathfrak P_1 \cap M)$.
> 
> First extend $\sigma_M$ to an isomorphism $\tilde{\sigma}: M' \to M'' \subseteq L$ over $K$. The prime ideal $\tilde{\sigma}(\mathfrak q_1)$ in $B_{M''}$ lies above $\sigma_M(\mathfrak P_1 \cap M) = \mathfrak P_2 \cap M$.
> 
> Because $M'/K$ is Galois, $M'' = M'$, so $\tilde{\sigma}\in\operatorname{Gal}(M'/K)$ extends $\sigma_M$.
> Now both $\tilde{\sigma}(\mathfrak q_1)$ and $\mathfrak q_2$ are prime ideals of $B_{M'}$ lying above the same prime $\mathfrak P_2 \cap M$ of $B_M$.
> 
> Because $M'/M$ is a **finite** Galois extension, Proposition 2.1 applies directly: the Galois group $\operatorname{Gal}(M'/M)$ acts transitively on the prime ideals of $B_{M'}$ lying above $\mathfrak P_2 \cap M$.
> 
> Hence there exists $\rho\in\operatorname{Gal}(M'/M)$ such that:
> $$
> \rho(\tilde{\sigma}(\mathfrak q_1)) = \mathfrak q_2.
> $$
> 
> Define $\sigma_{M'} = \rho \circ \tilde{\sigma}\in\operatorname{Gal}(M'/K)$.
> For any $y\in M$, since $\rho|_M = \operatorname{id}_M$:
> $$
> \sigma_{M'}(y) = \rho(\tilde{\sigma}(y)) = \tilde{\sigma}(y) = \sigma_M(y).
> $$
> Thus $\sigma_{M'}|_M = \sigma_M$.
> Furthermore:
> $$
> \sigma_{M'}(\mathfrak P_1 \cap M') = \sigma_{M'}(\mathfrak q_1) = \rho(\tilde{\sigma}(\mathfrak q_1)) = \mathfrak q_2 = \mathfrak P_2 \cap M'.
> $$
> 
> Therefore, $(M', \sigma_{M'})\in\mathcal F$ with $M \subsetneq M'$, which contradicts the maximality of $(M, \sigma_M)$.
> 
> We conclude that $M = L$. Hence $\sigma = \sigma_L \in\operatorname{Gal}(L/K)$ satisfies:
> $$
> \sigma(\mathfrak P_1) = \mathfrak P_2.
> $$
> 
> *(Alternative Topological Note: Since $G = \varprojlim \operatorname{Gal}(E/K)$ is a compact Hausdorff topological group under the Krull topology, for each finite Galois subextension $E$, the set $S_E = \{\sigma\in G : \sigma(\mathfrak P_1\cap E) = \mathfrak P_2\cap E\}$ is a non-empty closed subset by finite transitivity. The family $\{S_E\}$ has the finite intersection property, so by compactness $\bigcap_E S_E \ne \emptyset$, yielding the same result).*
> 
> ---
> 
> ### Part 2: Generalization of Proposition 2.5 (Decomposition and Inertia Groups)
> 
> Let $\mathfrak P$ be a prime ideal of $B$ lying above $\mathfrak p$.
> 
> Define:
> - The **decomposition group**:
>   $$
>   G_{\mathfrak P} = \{\sigma\in\operatorname{Gal}(L/K) : \sigma(\mathfrak P) = \mathfrak P\}.
>   $$
> - The **inertia group**:
>   $$
>   I_{\mathfrak P} = \{\sigma\in G_{\mathfrak P} : \sigma(x)\equiv x\pmod{\mathfrak P}\text{ for all }x\in B\}.
>   $$
> 
> Each $\sigma\in G_{\mathfrak P}$ induces an automorphism $\bar{\sigma}$ of $k_{\mathfrak P}=B/\mathfrak P$ over $k_{\mathfrak p}=A/\mathfrak p$ via $\bar{\sigma}(x\bmod\mathfrak P) = \sigma(x)\bmod\mathfrak P$. This gives the canonical reduction homomorphism:
> $$
> \mu: G_{\mathfrak P} \longrightarrow \operatorname{Aut}(k_{\mathfrak P}/k_{\mathfrak p}),
> $$
> whose kernel is by definition $I_{\mathfrak P}$.
> 
> **Theorem:** If the residue class field extension $k_{\mathfrak P}/k_{\mathfrak p}$ is normal and separable (i.e. Galois), then $\mu$ is surjective, yielding the exact sequence:
> $$
> 1 \longrightarrow I_{\mathfrak P} \longrightarrow G_{\mathfrak P} \xrightarrow{\quad\mu\quad} \operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p}) \longrightarrow 1.
> $$
> 
> **Proof:**
> Let $\bar{\tau}\in\operatorname{Gal}(k_{\mathfrak P}/k_{\mathfrak p})$ be an arbitrary automorphism. We must construct $\sigma\in G_{\mathfrak P}$ such that $\mu(\sigma)=\bar{\tau}$.
> 
> Consider the set $\mathcal G$ of pairs $(E, \sigma_E)$ where:
> 1. $E$ is an intermediate Galois extension of $K$ in $L$;
> 2. $\sigma_E\in\operatorname{Gal}(E/K)$ stabilizes $\mathfrak P\cap E$;
> 3. The induced automorphism $\overline{\sigma_E}$ on $k_{\mathfrak P\cap E} = (B\cap E)/(\mathfrak P\cap E)$ equals $\bar{\tau}|_{k_{\mathfrak P\cap E}}$.
> 
> $(K, \operatorname{id}_K)\in\mathcal G$. Partially order $\mathcal G$ by extension: $(E_1, \sigma_{E_1}) \le (E_2, \sigma_{E_2})$ if $E_1\subseteq E_2$ and $\sigma_{E_2}|_{E_1} = \sigma_{E_1}$.
> 
> Every totally ordered chain has an upper bound by taking directed unions. By Zorn's lemma, $\mathcal G$ contains a maximal element $(M, \sigma_M)$.
> 
> If $M \subsetneq L$, pick $\alpha\in L\setminus M$ and let $M'$ be the finite Galois closure of $M(\alpha)$ over $M$. By the finite version (Proposition 2.5 applied to $M'/M$), the reduction map:
> $$
> G_{\mathfrak P\cap M'}(M'/M) \longrightarrow \operatorname{Gal}(k_{\mathfrak P\cap M'}/k_{\mathfrak P\cap M})
> $$
> is surjective.
> 
> This allows lifting $\bar{\tau}|_{k_{\mathfrak P\cap M'}}$ to an automorphism of $M'$ stabilizing $\mathfrak P\cap M'$ and extending $\sigma_M$, contradicting the maximality of $M$.
> 
> Hence $M = L$, and $\sigma_L\in G_{\mathfrak P}$ satisfies $\mu(\sigma_L) = \bar{\tau}$.
> This proves surjectivity and completes the generalization of Proposition 2.5 to infinite Galois extensions.

## Related Concepts

- [[05 - Galois Theory/Concepts/Decomposition and Inertia Groups|Decomposition and Inertia Groups]]
- [[05 - Galois Theory/Concepts/Infinite Galois Extensions and Krull Topology|Infinite Galois Extensions and Krull Topology]]
- [[05 - Galois Theory/Concepts/Galois Extensions|Galois Extensions]]
- [[02 - Ring Theory/Concepts/Partially Ordered Sets and Zorns Lemma|Partially Ordered Sets and Zorn's Lemma]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Notes

- **Dual Perspectives:** The Zorn's lemma argument requested by Lang operates on intermediate finite Galois fields. The dual topological approach expresses the Galois group as a profinite group $G = \varprojlim \operatorname{Gal}(E/K)$ and invokes the compactness of the Krull topology. Both techniques confirm that finite algebraic properties descend and ascend seamlessly across infinite towers.
- **Topological Closedness:** In the infinite setting, $G_{\mathfrak P}$ and $I_{\mathfrak P}$ are closed subgroups of $G$ in the Krull topology.
- **Independent Derivation:** The stepwise poset construction with finite-step Galois extension lifts is independently detailed above.
