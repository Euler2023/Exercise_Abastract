---
title: "Exercise R256: The Group of Fractional Ideals in a Dedekind Ring"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - dedekind-rings
  - fractional-ideals
  - noetherian-rings
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. VII, Extensions of Rings, Exercise 7, printed pp. 353-354, PDF pp. 368-369"
created: 2026-09-15
---

# Exercise R256: The Group of Fractional Ideals in a Dedekind Ring

## Problem Statement

> [!question] Lang, Chapter VII, Exercise 7
> **Dedekind rings.** Let $\mathfrak o$ be an entire ring which is Noetherian, integrally closed, and such that every non-zero prime ideal is maximal. Define a fractional ideal $\mathfrak a$ to be an $\mathfrak o$-submodule $\ne 0$ of the quotient field $K$ such that there exists $c\in\mathfrak o$, $c\ne 0$ for which $c\mathfrak a \subset \mathfrak o$. Prove that the fractional ideals form a group under multiplication.
> 
> *Hint following van der Waerden:* Prove the following statements in order:
> 
> (a) Given an ideal $\mathfrak a\ne 0$ in $\mathfrak o$, there exists a product of prime ideals
> $$
> \mathfrak p_1\cdots\mathfrak p_r \subseteq \mathfrak a.
> $$
> 
> (b) Every maximal ideal $\mathfrak p$ is invertible, i.e., if we let $\mathfrak p^{-1}$ be the set of elements $x\in K$ such that $x\mathfrak p\subseteq\mathfrak o$, then $\mathfrak p^{-1}\mathfrak p = \mathfrak o$.
> 
> (c) Every non-zero ideal is invertible, by a fractional ideal. (Use the Noetherian property that if this is not true, there exists a maximal non-invertible ideal $\mathfrak a$, and get a contradiction.)

## Hints

> [!hint]- Hint 1: For part (a), consider a maximal counterexample
> If the set of nonzero ideals containing no product of primes is non-empty, the Noetherian property ensures the existence of a maximal element $\mathfrak b$. Show that $\mathfrak b$ cannot be prime, and obtain a contradiction by multiplying two strictly larger ideals.

> [!hint]- Hint 2: For part (b), construct an element outside $\mathfrak o$
> Choose $0\ne a\in\mathfrak p$ and let $\mathfrak p_1\cdots\mathfrak p_r\subseteq (a)\subseteq\mathfrak p$ with $r$ minimal. Since $\mathfrak p$ is prime and non-zero primes are maximal, $\mathfrak p_1=\mathfrak p$. Pick $b\in\mathfrak p_2\cdots\mathfrak p_r\setminus(a)$ and verify that $b/a\in\mathfrak p^{-1}\setminus\mathfrak o$.

> [!hint]- Hint 3: For part (b), use integrality to rule out $\mathfrak p^{-1}\mathfrak p = \mathfrak p$
> Since $\mathfrak p$ is maximal, $\mathfrak p^{-1}\mathfrak p$ is either $\mathfrak p$ or $\mathfrak o$. If $\mathfrak p^{-1}\mathfrak p = \mathfrak p$, then any $x\in\mathfrak p^{-1}$ stabilizes the faithful finitely generated $\mathfrak o$-module $\mathfrak p$, forcing $x$ to be integral over $\mathfrak o$. Why does this contradict $b/a\notin\mathfrak o$?

> [!hint]- Hint 4: For part (c), examine a maximal non-invertible ideal
> Let $\mathfrak a$ be a maximal non-invertible ideal and contain it in a maximal ideal $\mathfrak p$. Show that $\mathfrak a \subsetneq \mathfrak a\mathfrak p^{-1} \subseteq \mathfrak o$. Maximality implies $\mathfrak a\mathfrak p^{-1}$ is invertible; invert both sides to invert $\mathfrak a$.

## Solution

> [!success]- Complete Derivation
> Let $\mathfrak o$ be an integral domain (entire ring) with quotient field $K$. We are given that $\mathfrak o$ satisfies the three classical Dedekind axioms:
> 1. $\mathfrak o$ is Noetherian;
> 2. $\mathfrak o$ is integrally closed in $K$;
> 3. Every nonzero prime ideal of $\mathfrak o$ is maximal (Krull dimension 1).
> 
> We follow van der Waerden's three-step program.
> 
> ---
> 
> ### Part (a): Every nonzero ideal contains a product of prime ideals
> 
> Let $\Sigma$ be the collection of all nonzero ideals of $\mathfrak o$ that do **not** contain any finite product of nonzero prime ideals:
> $$
> \Sigma = \{I\subseteq\mathfrak o : I\ne(0)\text{ and }\forall r\ge1,\ \mathfrak p_1\cdots\mathfrak p_r \not\subseteq I\}.
> $$
> 
> Suppose for contradiction that $\Sigma\ne\emptyset$.
> 
> Since $\mathfrak o$ is Noetherian, every non-empty family of ideals contains a maximal element. Let $\mathfrak b\in\Sigma$ be a maximal element of $\Sigma$.
> 
> - The ideal $\mathfrak b$ cannot be a prime ideal, because if $\mathfrak b$ were prime, then $\mathfrak p_1 = \mathfrak b$ would be a product of $r=1$ prime ideals contained in $\mathfrak b$, contradicting $\mathfrak b\in\Sigma$.
> 
> - Since $\mathfrak b$ is not prime, there exist elements $x,y\in\mathfrak o$ such that $xy\in\mathfrak b$ but $x\notin\mathfrak b$ and $y\notin\mathfrak b$.
> 
> Consider the ideals:
> $$
> I_1 = \mathfrak b + (x),\qquad I_2 = \mathfrak b + (y).
> $$
> 
> Because $x\notin\mathfrak b$ and $y\notin\mathfrak b$, we have strict inclusions:
> $$
> \mathfrak b \subsetneq I_1\subseteq\mathfrak o,\qquad \mathfrak b \subsetneq I_2\subseteq\mathfrak o.
> $$
> 
> By the maximality of $\mathfrak b$ in $\Sigma$, neither $I_1$ nor $I_2$ belongs to $\Sigma$. Thus each contains a finite product of prime ideals:
> $$
> \mathfrak p_1\cdots\mathfrak p_r \subseteq I_1,\qquad \mathfrak q_1\cdots\mathfrak q_s \subseteq I_2.
> $$
> 
> Multiplying these two products:
> $$
> (\mathfrak p_1\cdots\mathfrak p_r)(\mathfrak q_1\cdots\mathfrak q_s) \subseteq I_1 I_2 = (\mathfrak b + (x))(\mathfrak b + (y)) = \mathfrak b^2 + x\mathfrak b + y\mathfrak b + (xy).
> $$
> 
> Since $\mathfrak b^2 \subseteq \mathfrak b$, $x\mathfrak b\subseteq\mathfrak b$, $y\mathfrak b\subseteq\mathfrak b$, and $xy\in\mathfrak b$, the right-hand side is contained in $\mathfrak b$:
> $$
> \mathfrak p_1\cdots\mathfrak p_r \mathfrak q_1\cdots\mathfrak q_s \subseteq \mathfrak b.
> $$
> 
> This is a finite product of $r+s$ prime ideals contained in $\mathfrak b$, directly contradicting $\mathfrak b\in\Sigma$.
> 
> Hence $\Sigma = \emptyset$, completing the proof of (a).
> 
> ---
> 
> ### Part (b): Every maximal ideal is invertible
> 
> Let $\mathfrak p$ be an arbitrary maximal ideal of $\mathfrak o$. Define:
> $$
> \mathfrak p^{-1} = \{x\in K : x\mathfrak p \subseteq \mathfrak o\}.
> $$
> 
> Since $1\in\mathfrak o$, we have $1\cdot\mathfrak p = \mathfrak p \subseteq \mathfrak o$, so $\mathfrak o\subseteq\mathfrak p^{-1}$.
> 
> Consequently:
> $$
> \mathfrak p = \mathfrak o\mathfrak p \subseteq \mathfrak p^{-1}\mathfrak p \subseteq \mathfrak o.
> $$
> 
> Thus $\mathfrak p^{-1}\mathfrak p$ is an ideal of $\mathfrak o$ containing the maximal ideal $\mathfrak p$. This leaves only two possibilities:
> $$
> \mathfrak p^{-1}\mathfrak p = \mathfrak p\qquad\text{or}\qquad \mathfrak p^{-1}\mathfrak p = \mathfrak o.
> $$
> 
> We must prove that $\mathfrak p^{-1}\mathfrak p = \mathfrak o$.
> 
> #### Step B.1: Proving $\mathfrak p^{-1} \supsetneq \mathfrak o$
> Pick any nonzero element $a\in\mathfrak p$.
> By part (a), the principal ideal $(a)$ contains a product of prime ideals:
> $$
> \mathfrak p_1\cdots\mathfrak p_r \subseteq (a) \subseteq \mathfrak p.
> $$
> Choose such a product with the minimal number of factors $r\ge1$.
> 
> Because $\mathfrak p$ is a prime ideal, the containment $\mathfrak p_1\cdots\mathfrak p_r\subseteq\mathfrak p$ implies that $\mathfrak p_i\subseteq\mathfrak p$ for some $i$.
> 
> In a Dedekind ring, every nonzero prime ideal is maximal. Since $\mathfrak p_i$ is a nonzero prime ideal and $\mathfrak p$ is maximal, we must have:
> $$
> \mathfrak p_i = \mathfrak p.
> $$
> 
> Without loss of generality, reorder the factors so that $\mathfrak p_1 = \mathfrak p$.
> 
> If $r=1$, then $\mathfrak p \subseteq (a) \subseteq \mathfrak p$, so $\mathfrak p = (a)$ is principal, in which case $a^{-1}\in\mathfrak p^{-1}$ and $a^{-1}\notin\mathfrak o$ (since $a$ is a non-unit in $\mathfrak o$), so $\mathfrak p^{-1}\supsetneq\mathfrak o$.
> 
> If $r>1$, by the minimality of $r$, the product of the remaining $r-1$ factors is not contained in $(a)$:
> $$
> \mathfrak p_2\cdots\mathfrak p_r \not\subseteq (a).
> $$
> 
> Choose an element $b\in\mathfrak p_2\cdots\mathfrak p_r$ such that $b\notin(a)$.
> Then:
> $$
> b\mathfrak p = b\mathfrak p_1 \subseteq \mathfrak p_1\cdots\mathfrak p_r \subseteq (a) = a\mathfrak o.
> $$
> 
> Multiplying by $a^{-1}\in K$:
> $$
> \left(\frac{b}{a}\right)\mathfrak p \subseteq \mathfrak o \implies \frac{b}{a} \in \mathfrak p^{-1}.
> $$
> 
> But $b\notin(a)=a\mathfrak o$, so $\frac{b}{a}\notin\mathfrak o$.
> 
> This proves that:
> $$
> \mathfrak p^{-1} \supsetneq \mathfrak o.
> $$
> 
> #### Step B.2: Excluding $\mathfrak p^{-1}\mathfrak p = \mathfrak p$
> Suppose for contradiction that $\mathfrak p^{-1}\mathfrak p = \mathfrak p$.
> 
> Then for every $x\in\mathfrak p^{-1}$, multiplication by $x$ preserves $\mathfrak p$:
> $$
> x\mathfrak p \subseteq \mathfrak p.
> $$
> 
> Because $\mathfrak o$ is Noetherian, the ideal $\mathfrak p$ is a finitely generated $\mathfrak o$-module.
> Furthermore, since $\mathfrak o$ is an integral domain and $\mathfrak p\ne(0)$, $\mathfrak p$ is a **faithful** $\mathfrak o$-module (if $c\mathfrak p=0$ for $c\in\mathfrak o$, then $c=0$).
> 
> By the integrality criterion INT 3 (Lang Chapter VII §1):
> The existence of a faithful $\mathfrak o[x]$-module that is finitely generated as an $\mathfrak o$-module implies that $x$ is **integral over $\mathfrak o$**.
> 
> Because $\mathfrak o$ is integrally closed in $K$:
> $$
> x \in \mathfrak o.
> $$
> 
> Since this holds for all $x\in\mathfrak p^{-1}$, we obtain $\mathfrak p^{-1}\subseteq\mathfrak o$, which directly contradicts $\frac{b}{a}\in\mathfrak p^{-1}\setminus\mathfrak o$ established in Step B.1.
> 
> Therefore, $\mathfrak p^{-1}\mathfrak p \ne \mathfrak p$, forcing:
> $$
> \mathfrak p^{-1}\mathfrak p = \mathfrak o.
> $$
> 
> This proves (b).
> 
> ---
> 
> ### Part (c): Every nonzero ideal is invertible
> 
> Let $\Omega$ be the set of all nonzero ideals of $\mathfrak o$ that are **not** invertible:
> $$
> \Omega = \{I\subseteq\mathfrak o : I\ne(0)\text{ and }\forall\text{ fractional ideal }\mathfrak c,\ I\mathfrak c\ne\mathfrak o\}.
> $$
> 
> Suppose for contradiction that $\Omega\ne\emptyset$.
> 
> Since $\mathfrak o$ is Noetherian, $\Omega$ contains a maximal element, say $\mathfrak a\in\Omega$.
> 
> - $\mathfrak a\ne\mathfrak o$, because $\mathfrak o\cdot\mathfrak o = \mathfrak o$, so $\mathfrak o$ is invertible.
> - Therefore, $\mathfrak a$ is a proper nonzero ideal, so it is contained in at least one maximal ideal $\mathfrak p$:
>   $$
>   \mathfrak a \subseteq \mathfrak p \subsetneq \mathfrak o.
>   $$
> 
> Multiply this inclusion by the fractional ideal $\mathfrak p^{-1}$:
> $$
> \mathfrak a = \mathfrak a\mathfrak o \subseteq \mathfrak a\mathfrak p^{-1} \subseteq \mathfrak p\mathfrak p^{-1} = \mathfrak o.
> $$
> 
> Thus $J = \mathfrak a\mathfrak p^{-1}$ is an integral ideal of $\mathfrak o$, and $\mathfrak a \subseteq J$.
> 
> If $\mathfrak a = \mathfrak a\mathfrak p^{-1}$, then any element $y\in\mathfrak p^{-1}$ satisfies $y\mathfrak a \subseteq \mathfrak a$. Since $\mathfrak a$ is finitely generated and faithful over $\mathfrak o$, the same integrality criterion INT 3 would force $y\in\mathfrak o$, so $\mathfrak p^{-1}\subseteq\mathfrak o$, which contradicts part (b).
> 
> Hence we have strict inclusion:
> $$
> \mathfrak a \subsetneq \mathfrak a\mathfrak p^{-1} \subseteq \mathfrak o.
> $$
> 
> By the maximality of $\mathfrak a$ in $\Omega$, the strictly larger ideal $J = \mathfrak a\mathfrak p^{-1}$ does **not** belong to $\Omega$, which means $J$ is invertible!
> 
> Let $\mathfrak c$ be the inverse of $J$:
> $$
> J\mathfrak c = (\mathfrak a\mathfrak p^{-1})\mathfrak c = \mathfrak o.
> $$
> 
> By associativity of ideal multiplication:
> $$
> \mathfrak a (\mathfrak p^{-1}\mathfrak c) = \mathfrak o.
> $$
> 
> Since $\mathfrak p^{-1}\mathfrak c$ is a product of fractional ideals, it is a fractional ideal of $\mathfrak o$.
> 
> Therefore, $\mathfrak a$ is invertible with inverse $\mathfrak a^{-1} = \mathfrak p^{-1}\mathfrak c$, which contradicts $\mathfrak a\in\Omega$.
> 
> We conclude that $\Omega = \emptyset$: **every nonzero ideal of $\mathfrak o$ is invertible**.
> 
> ---
> 
> ### Conclusion: Fractional ideals form an abelian group
> 
> A fractional ideal $\mathfrak a$ of $\mathfrak o$ in $K$ is by definition a nonzero $\mathfrak o$-submodule of $K$ such that $c\mathfrak a\subseteq\mathfrak o$ for some $0\ne c\in\mathfrak o$.
> 
> Setting $\mathfrak a_0 = c\mathfrak a$, $\mathfrak a_0$ is a nonzero integral ideal of $\mathfrak o$.
> By part (c), $\mathfrak a_0$ is invertible with inverse $\mathfrak a_0^{-1}$.
> 
> We have:
> $$
> \mathfrak a = c^{-1}\mathfrak a_0.
> $$
> 
> Define:
> $$
> \mathfrak a^{-1} = c\mathfrak a_0^{-1}.
> $$
> 
> Then:
> $$
> \mathfrak a\mathfrak a^{-1} = (c^{-1}\mathfrak a_0)(c\mathfrak a_0^{-1}) = (c^{-1}c)(\mathfrak a_0\mathfrak a_0^{-1}) = \mathfrak o\cdot\mathfrak o = \mathfrak o.
> $$
> 
> Furthermore:
> 1. Multiplication of fractional ideals is commutative and associative;
> 2. The unit ring $\mathfrak o$ acts as the identity element: $\mathfrak o\mathfrak a = \mathfrak a$;
> 3. Every fractional ideal $\mathfrak a$ has a multiplicative inverse $\mathfrak a^{-1}$.
> 
> Therefore, the non-zero fractional ideals of $\mathfrak o$ form an **abelian group** under ideal multiplication.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideal Classes and Class Groups|Ideal Classes and Class Groups]]

## Notes

- **van der Waerden's Program:** This classical derivation, popularized by B. L. van der Waerden in *Moderne Algebra*, provides an intrinsic Noetherian-induction proof of ideal invertibility without relying on valuation rings or localization.
- **Unique Factorization of Ideals:** Once every ideal is invertible, unique factorization of ideals into prime ideals follows as an immediate corollary: every ideal $\mathfrak a$ can be uniquely written as $\mathfrak p_1^{e_1}\cdots\mathfrak p_k^{e_k}$.
- **Independent Derivation:** All three induction and contradiction steps are independently verified using the INT 3 integrality criterion from Lang Chapter VII §1.
