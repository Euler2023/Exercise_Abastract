---
title: "Exercise R344: Unique Prime Ideal Factorization Characterizes Dedekind Domains"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - neukirch-algebraic-number-theory
  - dedekind-domains
  - ideal-factorization
  - integral-closure
source: "Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. I, §3, Exercise 9, printed p. 23, PDF p. 42"
created: 2026-10-17
---

# Exercise R344: Unique Prime Ideal Factorization Characterizes Dedekind Domains

## Problem Statement

> [!question] Neukirch I.3.9
> Let $\mathfrak o$ be an integral domain in which all nonzero ideals admit a unique factorization into prime ideals. Show that $\mathfrak o$ is a Dedekind domain.

For the unit ideal the factorization is the empty product; prime factors are proper prime ideals, and uniqueness is up to their order. Since the domain has no zero divisors, a prime factor of a nonzero ideal is automatically nonzero.

## Hints

> [!hint]- Hint 1: Obtain cancellation before assuming inverses
> Unique factorization implies that $IJ=IH$ with $I,J,H\ne0$ forces $J=H$. If $x\in\operatorname{Frac}(\mathfrak o)$ is integral, clear denominators in the finite module $\mathfrak o[x]$ to obtain a nonzero integral ideal $I$ with $xI\subseteq I$. Apply cancellation to $(c,cx)I=(c)I$, with $c,cx\in\mathfrak o$.

> [!hint]- Hint 2: Compare two generators after localization
> For $I=(a,b)$, the identity $I(a^2,b^2)=I^3$ gives $ab=ra^2+sb^2$. The element $z=ra/b$ satisfies $z^2-z+rs=0$, and $1-z=sb/a$. In a local ring, at least one of $z$ and $1-z$ is a unit.

> [!hint]- Hint 3: Establish maximality, then invertibility and finite generation
> The preceding comparison makes every localization at a maximal ideal a valuation ring. In a valuation ring, strictly nested nonzero primes $P\subsetneq Q$ satisfy $PQ=P$. Check this equality at all maximal localizations, and use cancellation globally to rule out such nesting. Only then show that a nonzero prime occurs in a principal ideal's factorization, giving it an inverse; finish with an explicit finite-generation argument.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation without assuming the Dedekind properties
>
> Write $A=\mathfrak o$ and $K=\operatorname{Frac}(A)$. We will derive the three conditions in Neukirch's definition: integral closedness, maximality of every nonzero prime, and the Noetherian property. A field satisfies all three; the argument below also covers that case, with no nonzero primes to consider.
>
> ### 1. Nonzero integral ideals can be cancelled
> If $IJ=IH$ for nonzero ideals $I,J,H$, factor all three ideals into primes. The equality says that the multiset of factors of $I$ together with those of $J$ equals the multiset for $I$ together with those of $H$. Uniqueness permits cancellation of the common factors, so $J=H$.
>
> No ideal inverses or finite-generation hypothesis is used in this step.
>
> ### 2. The domain $A$ is integrally closed
> Suppose $x\in K$ satisfies a monic equation of degree $n$ over $A$. Reduction of powers by this equation shows that
> $$
> A[x]=A+Ax+\cdots+Ax^{n-1}.
> $$
> Choose $0\ne d\in A$ clearing the denominators of these finitely many powers. Then
> $$
> I=dA[x]\subseteq A
> $$
> is a nonzero integral ideal, and $xI\subseteq I$ because $A[x]$ is a ring. Separately choose $0\ne c\in A$ with $cx\in A$. The equality
> $$
> (c,cx)I=cI+cxI=cI=(c)I
> $$
> and Step 1 imply $(c,cx)=(c)$. Consequently $cx=ca$ for some $a\in A$, so $x=a\in A$. This proves integral closedness before any appeal to Noetherianity or invertibility.
>
> ### 3. Every maximal localization is a valuation ring
> Take nonzero $a,b\in A$ and put $I=(a,b)$. Direct multiplication gives
> $$
> I(a^2,b^2)=(a^3,a^2b,ab^2,b^3)=I^3.
> $$
> Cancel $I$ to get $(a^2,b^2)=I^2$. In particular, for some $r,s\in A$,
> $$
> ab=ra^2+sb^2.
> $$
> Define $z=ra/b$ and $w=sb/a$. Then $z+w=1$ and $zw=rs$, so
> $$
> z^2-z+rs=0.
> $$
> By Step 2, $z\in A$, and therefore $w=1-z\in A$ as well.
>
> Let $\mathfrak m$ be a maximal ideal. In the local ring $A_{\mathfrak m}$, at least one of $z,w$ is a unit, since their sum is $1$. If $z$ is a unit, then
> $$
> \frac ba=\frac rz\in A_{\mathfrak m};
> $$
> if $w$ is a unit, then
> $$
> \frac ab=\frac sw\in A_{\mathfrak m}.
> $$
> Every nonzero element of $K$ has the form $a/b$. We have therefore proved that it or its inverse lies in $A_{\mathfrak m}$. This is exactly the valuation-ring property. In particular, any two nonzero elements in $A_{\mathfrak m}$ generate comparable principal ideals.
>
> ### 4. Every nonzero prime ideal is maximal
> First observe that in a valuation domain $V$, strictly nested prime ideals $P\subsetneq Q$ satisfy $PQ=P$. The inclusion $PQ\subseteq P$ always holds. For the reverse inclusion choose $q\in Q\setminus P$. For $0\ne p\in P$, the valuation-ring property gives either $p/q\in V$ or $q/p\in V$. The latter possibility would put $q$ in $P$, so $p/q\in V$. Since $q(p/q)=p\in P$ and $q\notin P$, primality gives $p/q\in P$. Thus $p=q(p/q)\in QP$; the element $0$ belongs to $PQ$ too.
>
> Now suppose $0\ne P\subsetneq Q$ are prime ideals of $A$. For any maximal ideal $\mathfrak m$ not containing $Q$, one has $Q_{\mathfrak m}=A_{\mathfrak m}$, and hence
> $$
> P_{\mathfrak m}Q_{\mathfrak m}=P_{\mathfrak m}.
> $$
> If $Q\subseteq\mathfrak m$, the localized primes satisfy $P_{\mathfrak m}\subsetneq Q_{\mathfrak m}$. They are prime because their quotient rings are localizations of domains, and their contractions are $P,Q$, respectively: if $sa\in P$ with $s\notin\mathfrak m$, then $s\notin P$ and hence $a\in P$. This also proves that the two localized primes remain distinct. Step 3 and the valuation-domain argument again give $P_{\mathfrak m}Q_{\mathfrak m}=P_{\mathfrak m}$.
>
> Thus $(PQ)_{\mathfrak m}=P_{\mathfrak m}$ at every maximal ideal. We recall why these equalities imply $PQ=P$. If an inclusion $J\subsetneq I$ of ideals were strict, take $h\in I\setminus J$. The ideal
> $$
> (J:h)=\{a\in A:ah\in J\}
> $$
> is proper, so lies in a maximal ideal $\mathfrak m$. But $h/1\notin J_{\mathfrak m}$: membership would supply $s\notin\mathfrak m$ with $sh\in J$, contradicting $s\in(J:h)$. Hence equality at every maximal localization detects equality of ideals. Applying this with $J=PQ$ and $I=P$ proves $PQ=P$.
>
> Cancel the nonzero ideal $P$ from $PQ=PA$ to get $Q=A$, contradicting primality. Therefore no strict inclusion $0\ne P\subsetneq Q$ of prime ideals exists. Every nonzero prime $P$ lies in a maximal ideal, which is prime, so $P$ must itself be maximal.
>
> ### 5. All nonzero ideals are invertible and finitely generated
> Let $P$ be a nonzero prime, and choose $0\ne a\in P$. Factor the principal ideal:
> $$
> (a)=P_1\cdots P_r.
> $$
> Since this product lies in $P$, primality implies $P_i\subseteq P$ for some $i$. Both primes are nonzero and maximal by Step 4, so $P_i=P$. Let $J$ be the product of the remaining factors, taking $J=A$ if there are none. Then
> $$
> PJ=(a),\qquad P\bigl(a^{-1}J\bigr)=A.
> $$
> Here $a^{-1}J\subseteq a^{-1}A$ is a bounded $A$-submodule of $K$; no finite generation has yet been assumed for it. Multiplying these inverse submodules along a prime factorization shows that every nonzero ideal $I$ has a bounded $A$-submodule $B\subseteq K$ with $IB=A$.
>
> By the definition of an ideal product, the membership $1\in IB$ is witnessed by a finite sum
> $$
> 1=\sum_{i=1}^t x_i y_i,
> \qquad x_i\in I,\quad y_i\in B.
> $$
> For every $x\in I$, all $y_ix$ belong to $A$ because $IB=A$. Hence
> $$
> x=\sum_{i=1}^t x_i(y_ix)\in(x_1,\ldots,x_t).
> $$
> Therefore $I=(x_1,\ldots,x_t)$ is finitely generated. The zero ideal is also finitely generated, so $A$ is Noetherian.
>
> Steps 2, 4, and 5 establish precisely that $A$ is a Noetherian, integrally closed domain with every nonzero prime maximal. It is consequently a Dedekind domain.

## Related Concepts

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Dedekind Rings and Fractional Ideals]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[04 - Linear Algebra and Modules/Concepts/Noetherian Modules|Noetherian Modules]]

## Notes

- **Source verification:** The complete exercise was visually checked in [S4, Ch. I, §3, Exercise 9, printed p. 23, PDF p. 42]. There is no printed hint or required source figure. The target definition is [S4, Ch. I, §3, Definition (3.2), printed p. 18, PDF p. 37].
- **Proof status:** This is an independent derivation of the converse to the Dedekind ideal-factorization theorem. The forward implication is [S4, Ch. I, §3, Theorem (3.3), statement printed p. 18, PDF p. 37]; it is not used to prove its converse here.
- **Dependency order:** Unique factorization first supplies cancellation; cancellation supplies integral closedness and local comparability; local comparability and cancellation give maximality of nonzero primes; only then are inverses constructed and finite generation proved. In particular, ideal inclusion is not silently identified with divisibility before that identification is justified by invertibility.
- **Inputs and boundaries:** The argument uses the basic maximal-ideal existence theorem and elementary localization operations, including localization of products and the fraction-membership test. The needed prime-contraction and local equality tests are explained in the proof. No Noetherian assumption, prior invertibility theorem, or prior maximality of nonzero primes is imported. The bounded inverse submodules are constructed before finite generation; this avoids using the source's finitely-generated definition of a fractional ideal prematurely.
- **Field convention and routing:** Definition (3.2) permits fields, for which the condition on nonzero primes is vacuous. Ring Theory is primary because the proof reconstructs the structural properties of a domain from its ideal multiplication and factorization.

